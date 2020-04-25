import React from "react";
import { Spin } from "antd";
import loadingStyle from "./loading.module.css";

/** 加载状态 */

export default function Loading() {
  return (
    <div className={loadingStyle.loadingContainer}>
      <Spin>加载中...</Spin>
    </div>
  );
}
