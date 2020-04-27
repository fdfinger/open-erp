/*
 Navicat Premium Data Transfer

 Source Server         : aliyun
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : 118.190.237.48:3306
 Source Schema         : openerp

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 27/04/2020 20:43:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for customer_info
-- ----------------------------
DROP TABLE IF EXISTS `customer_info`;
CREATE TABLE `customer_info`  (
  `cus_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '客户ID',
  `cus_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '客户编码',
  `cus_type` int(1) NOT NULL DEFAULT 0 COMMENT '客户类型： 0 供应商 1 销售商 2 外协商',
  `cus_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '客户名称',
  `cus_area_id` int(11) NULL DEFAULT 0 COMMENT '所属区域',
  `cus_status` int(1) NULL DEFAULT 0 COMMENT '启用状态',
  `cus_social_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '社会代码证号',
  `cus_contact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '联系人',
  `cus_contact_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '联系地址',
  `cus_contact_telphone` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '联系电话',
  `cus_contact_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '联系邮箱',
  `cus_contact_fax` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '传真',
  `cus_settlement_bank` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '结算开户行',
  `cus_settlement_account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '结算账户',
  `cus_settlement_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '结算账户名',
  `cus_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '备注',
  `create_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `modify_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`cus_id`) USING BTREE,
  INDEX `地区`(`cus_area_id`) USING BTREE,
  CONSTRAINT `地区` FOREIGN KEY (`cus_area_id`) REFERENCES `sys_area` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '客户信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customer_info
-- ----------------------------
INSERT INTO `customer_info` VALUES (1, '18-1000-001', 0, '叶子服饰', 1, 1, '310111111111111', '罗健', '深圳福田区', '0755-12345678', '123@qq.com', '0575-12345678', '中国建设银行股份有限公司', '6116 6116 6166 123', '浙江永康岘峰厂', '客户信息备注客户信息备注客户信息备注', '2020-04-27 04:26:44', '2020-04-27 04:26:44');

-- ----------------------------
-- Table structure for material
-- ----------------------------
DROP TABLE IF EXISTS `material`;
CREATE TABLE `material`  (
  `material_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '物料ID',
  `material_cata_id` int(11) NULL DEFAULT NULL COMMENT '分类ID',
  `warehouse_id` int(11) NULL DEFAULT NULL COMMENT '仓库ID',
  `project_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '项目编码',
  `project_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '项目名称',
  `specification_model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '规格型号',
  `specification_unit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '规格单位',
  `charge_unit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '计价单位',
  `conversion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '规格与计价之间的换算值',
  `material` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '材质',
  `color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '颜色',
  `procurement_price` decimal(10, 2) NULL DEFAULT 0.00 COMMENT '采购含税单价',
  `procurement_rate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '采购税率',
  `safety_stock` int(20) NULL DEFAULT 0 COMMENT '安全库存',
  `stock_up` int(20) NULL DEFAULT 0 COMMENT '库存上限',
  `stock_down` int(20) NULL DEFAULT 0 COMMENT '库存下限',
  `material_status` tinyint(1) NULL DEFAULT 0 COMMENT '状态',
  `create_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `modify_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`material_id`) USING BTREE,
  INDEX `分类`(`material_cata_id`) USING BTREE,
  INDEX `仓库`(`warehouse_id`) USING BTREE,
  CONSTRAINT `仓库` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouse` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `分类` FOREIGN KEY (`material_cata_id`) REFERENCES `material_catalogue` (`material_cata_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '物料信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for material_catalogue
-- ----------------------------
DROP TABLE IF EXISTS `material_catalogue`;
CREATE TABLE `material_catalogue`  (
  `material_cata_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '物料分类ID',
  `material_cata_parent_id` int(11) NULL DEFAULT 0 COMMENT '物料分类父类ID',
  `material_cata_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '分类编码',
  `material_cata_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '分类名称',
  `material_cata_suject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '财务科目',
  `material_cata_status` tinyint(1) NULL DEFAULT 0 COMMENT '分类状态',
  `material_cata_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '备注\r\n备注',
  `create_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `modify_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  PRIMARY KEY (`material_cata_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '物料分类' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_area
-- ----------------------------
DROP TABLE IF EXISTS `sys_area`;
CREATE TABLE `sys_area`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '地区ID',
  `area_code` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '地区编码',
  `parent_area_code` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '上级地区编码',
  `area_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '地区名称',
  `area_status` int(1) NOT NULL DEFAULT 0 COMMENT '启用状态(0禁用1启用)',
  `create_date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `modify_date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '地区' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_area
-- ----------------------------
INSERT INTO `sys_area` VALUES (1, 'zhongguo', '', '中国', 0, '2020-04-18 16:01:31', '2020-04-18 16:01:31');
INSERT INTO `sys_area` VALUES (2, 'shanghai', 'zhongguo', '上海', 0, '2020-04-18 16:47:42', '2020-04-18 16:47:42');
INSERT INTO `sys_area` VALUES (3, 'minhang', 'shanghai', '闵行', 0, '2020-04-19 08:24:24', '2020-04-19 08:24:24');
INSERT INTO `sys_area` VALUES (4, 'zhejiang', 'zhongguo', '浙江', 0, '2020-04-21 11:51:18', '2020-04-21 11:55:32');
INSERT INTO `sys_area` VALUES (6, 'hangzhou', 'zhejiang', '杭州', 0, '2020-04-21 14:12:45', '2020-04-21 14:18:52');
INSERT INTO `sys_area` VALUES (7, 'wenzhou', 'zhejiang', '温州', 0, '2020-04-21 14:20:22', '2020-04-21 14:20:22');

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '部门id',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '部门名称',
  `parent_id` int(11) NOT NULL DEFAULT 0 COMMENT '上级部门id',
  `level` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '部门层级',
  `seq` int(11) NOT NULL DEFAULT 0 COMMENT '部门在当前层级下的顺序，由小到大',
  `remark` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '备注',
  `operator` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '操作者',
  `operator_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '最后一次操作时间',
  `operator_ip` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '最后一名操作者的ip',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '部门表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (1, 'xxx总公司', 0, '1', 1, '', '无', '2020-04-15 21:18:21', '');
INSERT INTO `sys_dept` VALUES (2, '憨批总公司', 0, '1', 2, '', '无', '2020-04-15 21:18:21', '');

-- ----------------------------
-- Table structure for sys_pro
-- ----------------------------
DROP TABLE IF EXISTS `sys_pro`;
CREATE TABLE `sys_pro`  (
  `process_id` int(32) NOT NULL AUTO_INCREMENT COMMENT '工序ID',
  `pro_cata_id` int(32) NOT NULL COMMENT '分类编码',
  `process_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '工序编码',
  `parent_process_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '上级工序编码',
  `process_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '工序名称',
  `is_valuation` int(1) NOT NULL DEFAULT 0 COMMENT '是否计价',
  `is_outsourcing` int(1) NOT NULL DEFAULT 0 COMMENT '是否外协',
  `process_status` int(1) NOT NULL DEFAULT 0 COMMENT '启用状态',
  `process_remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '备注',
  `create_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `modify_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  PRIMARY KEY (`process_id`) USING BTREE,
  INDEX `分类编码`(`pro_cata_id`) USING BTREE,
  CONSTRAINT `分类编码` FOREIGN KEY (`pro_cata_id`) REFERENCES `sys_pro_cata` (`pro_cata_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '工序表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_pro
-- ----------------------------
INSERT INTO `sys_pro` VALUES (1, 1, 'SJBM201801', '', '男装袖口整理', 1, 1, 0, '无', '2020-04-24 11:59:11', '2020-04-24 11:59:32');

-- ----------------------------
-- Table structure for sys_pro_cata
-- ----------------------------
DROP TABLE IF EXISTS `sys_pro_cata`;
CREATE TABLE `sys_pro_cata`  (
  `pro_cata_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '工序分类ID',
  `pro_cata_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '工序分类编码',
  `pro_cata_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '工序分类名称',
  `pro_cata_status` int(1) NOT NULL DEFAULT 0 COMMENT '工序分类状态',
  `pro_cata_remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '工序分类备注',
  `create_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `modify_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  PRIMARY KEY (`pro_cata_id`) USING BTREE,
  INDEX `pro_cata_code`(`pro_cata_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '工序分类' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_pro_cata
-- ----------------------------
INSERT INTO `sys_pro_cata` VALUES (1, 'FLBM10-0001-01', '袖口整理', 0, '袖口整理', '2020-04-23 14:03:51', '2020-04-23 14:03:46');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` int(32) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '登陆账号',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '用户昵称',
  `telephone` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '用户手机号',
  `mail` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '用户邮箱',
  `sex` int(1) NOT NULL DEFAULT 0 COMMENT '性别',
  `education` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '学历',
  `job` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '职务',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '用户密码',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '备注',
  `dep_id` int(11) NOT NULL DEFAULT 0 COMMENT '用户部门表',
  `status` tinyint(3) NOT NULL DEFAULT 1 COMMENT '用户的状态 1 ：正常  0：冻结 2：删除',
  `operator` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '操作人',
  `operator_time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '操作时间',
  `operator_ip` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '操作人的ip',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `部门Id`(`dep_id`) USING BTREE,
  CONSTRAINT `部门Id` FOREIGN KEY (`dep_id`) REFERENCES `sys_dept` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (2, 'jiangfei2', '江飞', '15229371873', 'jiangfei.ng@foxmail.com', 1, '本科', '程序员', '333', '学识ok', 1, 1, '', '2020-04-22 15:16:08', '');
INSERT INTO `sys_user` VALUES (3, 'sample', '', '15229371873', 'jiangfei.ng@foxmail.com', 1, '本科', '程序员', '123', '学识渊博', 1, 1, '', '2020-04-19 07:50:57', '');
INSERT INTO `sys_user` VALUES (4, 'sample', '', '15229371873', 'jiangfei.ng@foxmail.com', 1, '本科', '程序员', '123', '学识渊博', 1, 1, '', '2020-04-19 07:51:12', '');

-- ----------------------------
-- Table structure for warehouse
-- ----------------------------
DROP TABLE IF EXISTS `warehouse`;
CREATE TABLE `warehouse`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '仓库ID',
  `warehouse_code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '仓库编码',
  `sys_dept_id` int(10) UNSIGNED ZEROFILL NULL DEFAULT NULL COMMENT '所属部门Id',
  `sys_dept_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '所属部门名称',
  `warehouse_status` int(1) UNSIGNED ZEROFILL NULL DEFAULT NULL COMMENT '仓库启用状态',
  `warehouse_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '仓库名称',
  `warehouse_remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '仓库备注',
  `create_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `modify_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '仓库' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of warehouse
-- ----------------------------
INSERT INTO `warehouse` VALUES (1, '121212', 0000000000, '', 0, '大中华区总仓库', '大中华区总仓库', '2020-04-19 09:06:43', '2020-04-19 09:06:43');

SET FOREIGN_KEY_CHECKS = 1;
