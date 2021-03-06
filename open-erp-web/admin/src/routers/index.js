import React from "react";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Department from "../pages/Department";
import Users from "../pages/Users";
import Area from "../pages/Area";
import Warehouse from "../pages/Warehouse";
import ProcessCata from "../pages/ProcessCata";
import Process from "../pages/Process";
import Setting from "../pages/Setting";
import Customer from "../pages/Customer";
import MaterialCata from "../pages/MaterialCata";
import Material from "../pages/Material";
import Product from "../pages/Product";
import Device from "../pages/Device";

export const Parent = ({ children }) => {
  return <div>{children}</div>;
};

// export const commonRoutes = [
//   {
//     path: "/login",
//     component: React.lazy(() => import("../pages/Login")),
//   },
//   {
//     path: "/404",
//     component: React.lazy(() => import("../pages/NotFound")),
//   },
// ];

export const commonRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: NotFound,
  },
];

// export const routers = [
//   {
//     path: '/dashboard',
//     title: '数据仪表',
//     component: React.lazy(() => import("../pages/Dashboard"))
//   },
//   {
//     path: '/system',
//     title: '系统管理',
//     component: Parent,
//     childrens: [

//       {
//         path: '/system/department',
//         title: '部门管理',
//         component: React.lazy(() => import("../pages/Department"))
//       },
//       {
//         path: '/system/users',
//         title: '用户信息',
//         component: React.lazy(() => import("../pages/Users"))
//       },
//       {
//         path: '/system/area',
//         title: '地区管理',
//         component: React.lazy(() => import("../pages/Area"))
//       },
//       {
//         path: '/system/warehouse',
//         title: '仓库管理',
//         component: React.lazy(() => import("../pages/Warehouse"))
//       },
//       {
//         path: '/system/processCata',
//         title: '工序分类',
//         component: React.lazy(() => import("../pages/ProcessCata"))
//       },
//       {
//         path: '/system/process',
//         title: '工序管理',
//         component: React.lazy(() => import("../pages/Process"))
//       },
//       {
//         path: '/system/setting',
//         title: '个人设置',
//         component: React.lazy(() => import("../pages/Setting"))
//       },
//     ]
//   },
// ];

export const routers = [
  {
    path: "/dashboard",
    title: "数据仪表",
    component: Dashboard,
  },
  {
    path: "/workshop",
    title: "设备能源",
    component: Parent,
    childrens: [
      {
        path: "/workshop",
        title: "车间设备",
        component: Device
      }
    ]
  },
  {
    path: "/system",
    title: "系统管理",
    component: Parent,
    childrens: [
      {
        path: "/system/area",
        title: "地区信息",
        component: Area,
      },
      {
        path: "/system/customer",
        title: "客户信息",
        component: Customer,
      },
      {
        path: "/system/warehouse",
        title: "仓库信息",
        component: Warehouse,
      },
      {
        path: "/system/materialCata",
        title: "物料分类",
        component: MaterialCata,
      },
      {
        path: "/system/material",
        title: "物料管理",
        component: Material,
      },
      {
        path: "/system/process",
        title: "工序管理",
        component: Process,
      },
      {
        path: "/system/product",
        title: "产品BOM",
        component: Product,
      },
      {
        path: "/system/users",
        title: "用户信息",
        component: Users,
      },
      {
        path: "/system/processCata",
        title: "工序分类",
        component: ProcessCata,
      },
      {
        path: "/system/department",
        title: "部门管理",
        component: Department,
      },
      {
        path: "/system/setting",
        title: "个人设置",
        component: Setting,
      },
    ],
  },
];
