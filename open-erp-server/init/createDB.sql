-- 创建所有表的SQL语句

CREATE DATABASE `openerp`;

-- 部门表
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

-- 用户表
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


-- 初始数据
-- 部门表
INSERT INTO sys_dept ( NAME, parent_id, LEVEL, seq, remark, operator )
VALUES
	( 'xxx总公司', 0, 1, 1, '', '无' );