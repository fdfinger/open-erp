import React, { useState, useEffect } from "react";
import { Tree } from "antd";

import { getList, getDataById } from "../../api/department";

function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });
}

const DepartmentTree = (props) => {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    getList({ level: 0 }).then((res) => {
      const newTreeData =
        (res.data &&
          res.data.rows.map((item) => ({
            key: String(item.id),
            title: item.name,
          }))) ||
        [];
      setTreeData(newTreeData);
    });
  }, []);

  function onLoadData({ key, children }) {
    return getDataById(key).then((res) => {
      const { data } = res;
      setTreeData((origin) => {
        updateTreeData(
          origin,
          key,
          data.map((item) => ({ key: item.id, title: item.name }))
        );
      });
    });
  }

  return <Tree loadData={onLoadData} treeData={treeData} onSelect={props.onSelect}/>;
};

export default DepartmentTree;
