import React from "react";

export const Parent = ({ children }) => {
  return (
  <div>{children}</div>
  )
}


export const commonRoutes = [
  {
    path: "/login",
    component: React.lazy(() => import("../pages/Login")),
  },
  {
    path: "/404",
    component: React.lazy(() => import("../pages/NotFound")),
  },
];

export const routers = [
  {
    path: '/dashboard',
    title: '数据仪表',
    component: React.lazy(() => import("../pages/Dashboard"))
  },
  {
    path: '/system',
    title: '系统管理',
    component: Parent,
    childrens: [

      {
        path: '/system/department',
        title: '部门管理',
        component: React.lazy(() => import("../pages/Department"))
      },
      {
        path: '/system/users',
        title: '用户信息',
        component: React.lazy(() => import("../pages/Users"))
      },
      {
        path: '/system/area',
        title: '地区管理',
        component: React.lazy(() => import("../pages/Area"))
      },
      {
        path: '/system/warehouse',
        title: '仓库管理',
        component: React.lazy(() => import("../pages/Warehouse"))
      },
      {
        path: '/system/processCata',
        title: '工序分类',
        component: React.lazy(() => import("../pages/ProcessCata"))
      },
      {
        path: '/system/process',
        title: '工序管理',
        component: React.lazy(() => import("../pages/Process"))
      },
      {
        path: '/system/setting',
        title: '个人设置',
        component: React.lazy(() => import("../pages/Setting"))
      },
    ]
  },
];
