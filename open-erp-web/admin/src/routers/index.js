import React from "react";

export const commonRoutes = [
  {
    path: "/login",
    exact: true,
    component: React.lazy(() => import("../pages/Login")),
  },
  {
    path: "/404",
    component: React.lazy(() => import("../pages/NotFound")),
  },
];

export const routers = [
  {
    path: '/admin/dashboard',
    title: '数据仪表',
    isShow: false,
    component: React.lazy(() => import("../pages/Dashboard"))
  },
  {
    path: '/admin/department',
    title: '部门管理',
    isShow: true,
    component: React.lazy(() => import("../pages/Department"))
  },
  {
    path: '/admin/users',
    title: '用户信息',
    isShow: true,
    component: React.lazy(() => import("../pages/Users"))
  },
  {
    path: '/admin/area',
    title: '地区管理',
    isShow: true,
    component: React.lazy(() => import("../pages/Area"))
  },
  {
    path: '/admin/warehouse',
    title: '仓库管理',
    isShow: true,
    component: React.lazy(() => import("../pages/Warehouse"))
  },
];
