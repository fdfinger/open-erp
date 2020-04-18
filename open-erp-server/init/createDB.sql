CREATE DATABASE `openerp`;

CREATE TABLE `sys_dept` (
	`id` INT NOT NULL auto_increment COMMENT '部门id',
	`name` VARCHAR ( 20 ) NOT NULL DEFAULT '' COMMENT '部门名称',
	`parent_id` INT NOT NULL DEFAULT 0 COMMENT '上级部门id',
	`level` VARCHAR ( 200 ) NOT NULL DEFAULT '' COMMENT '部门层级',
	`seq` INT NOT NULL DEFAULT 0 COMMENT '部门在当前层级下的顺序，由小到大',
	`remark` VARCHAR ( 200 ) DEFAULT '' COMMENT '备注',
	`operator` VARCHAR ( 20 ) NOT NULL DEFAULT '' COMMENT '操作者',
	`operator_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后一次操作时间',
	`operator_ip` VARCHAR ( 20 ) NOT NULL DEFAULT '' COMMENT '最后一名操作者的ip',
	PRIMARY KEY ( `id` ) 
) COMMENT '部门表';

CREATE TABLE `sys_user` (
	`id` INT ( 32 ) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
	`username` VARCHAR ( 64 ) NOT NULL DEFAULT '' COMMENT '用户名字',
	`telephone` VARCHAR ( 64 ) NOT NULL DEFAULT '' COMMENT '用户手机号',
	`mail` VARCHAR ( 64 ) NOT NULL DEFAULT '' COMMENT '用户邮箱',
	`sex` INT ( 1 ) NOT NULL DEFAULT '0' COMMENT '性别',
	`education` VARCHAR ( 64 ) NOT NULL DEFAULT '' COMMENT '学历',
	`job` VARCHAR ( 64 ) NOT NULL DEFAULT '' COMMENT '职务',
	`password` VARCHAR ( 255 ) NOT NULL DEFAULT '' COMMENT '用户密码',
	`remark` VARCHAR ( 255 ) DEFAULT '' COMMENT '备注',
	`dep_id` INT ( 11 ) NOT NULL DEFAULT '0' COMMENT '用户部门表',
	`status` TINYINT ( 3 ) NOT NULL DEFAULT '1' COMMENT '用户的状态 1 ：正常  0：冻结 2：删除',
	`operator` VARCHAR ( 64 ) NOT NULL DEFAULT '' COMMENT '操作人',
	`operator_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '操作时间',
	`operator_ip` VARCHAR ( 64 ) NOT NULL DEFAULT '' COMMENT '操作人的ip',
PRIMARY KEY ( `id` ) 
) ENGINE = INNODB DEFAULT CHARSET = utf8mb4;


INSERT INTO sys_dept ( NAME, parent_id, LEVEL, seq, remark, operator )
VALUES
	( 'xxx总公司', 0, 1, 1, '', '无' );

CREATE TABLE `sys_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '地区ID',
  `area_code` varchar(36) NOT NULL DEFAULT '' COMMENT '地区编码',
  `parent_area_code` varchar(36) NOT NULL DEFAULT '' COMMENT '上级地区编码',
  `area_name` varchar(255) NOT NULL DEFAULT '' COMMENT '地区名称',
  `area_status` int(1) NOT NULL DEFAULT '0' COMMENT '启用状态(0禁用1启用)',
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='地区';

CREATE TABLE `warehouse` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '仓库ID',
  `warehouse_code` varchar(50) NOT NULL DEFAULT '' COMMENT '仓库编码',
  `sys_dept_id` int(10) unsigned zerofill DEFAULT NULL COMMENT '所属部门Id',
  `sys_dept_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '所属部门名称',
  `warehouse_status` int(1) unsigned zerofill DEFAULT NULL COMMENT '仓库启用状态',
  `warehouse_name` varchar(255) DEFAULT '' COMMENT '仓库名称',
  `warehouse_remark` varchar(255) DEFAULT '' COMMENT '仓库备注',
  `create_data` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `modify_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='仓库';