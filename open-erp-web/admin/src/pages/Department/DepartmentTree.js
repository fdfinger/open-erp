import React, {  } from "react";
import { Tree } from "antd";

const DepartmentTree = ({onLoadData, onSelect, treeData }) => {
  const loadTree = (node) => {
    return new Promise((resolve) => {
      onLoadData(node)
      resolve()
    })
  }
  return <Tree loadData={loadTree} treeData={treeData} onSelect={onSelect}/>;
};

export default DepartmentTree;
