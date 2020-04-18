import React, { useState } from "react";
import { Card, Button } from "antd";

function PageSearch(props) {
  const [hasSearchBox, setSearcBox] = useState(true);

  const openSearchBox = () => {
    setSearcBox(true);
  };

  const closeSearchBox = () => {
    setSearcBox(false);
  };

  const handleSearchBox = () => {
    if (hasSearchBox) {
      closeSearchBox();
    } else {
      openSearchBox();
    }
  };

  return (
    <Card
      title="筛选条件"
      bodyStyle={{ padding: 20, display: hasSearchBox ? '' : 'none' }}
      extra={
        <>
          <Button type="link" onClick={handleSearchBox.bind(this)}>
            {hasSearchBox ? "收起筛选项" : "打开筛选项"}
          </Button>
          <Button disabled={!hasSearchBox} onClick={props.onSearch}>查询</Button>
        </>
      }
    >
      {props.children}
    </Card>
  );
}

export default PageSearch;
