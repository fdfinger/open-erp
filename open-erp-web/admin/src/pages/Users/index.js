import React, { useEffect } from "react";
import { Layout, Card, Button } from "antd";
import { connect } from "react-redux";
import UserSearch from "./UserSearch.js";
import { onSearch, searchFormChange } from "../../store/actions/user";
import UserTable from "./UserTable.js";

function Users({dataSource, onSearch, searchFormChange}) {
  useEffect(() => {
    onSearch()
  }, [onSearch])
  return (
    <Layout>
      <UserSearch onSearch={onSearch} onChange={searchFormChange}></UserSearch>
      <Card
        title={"数据列表"}
        style={{ marginTop: 16 }}
        bodyStyle={{ padding: 0 }}
        extra={<Button type="primary">新增</Button>}
      >
        <UserTable dataSource={dataSource}/>
      </Card>
    </Layout>
  );
}

const mapStateToProps = (state) => state.user

export default connect(mapStateToProps, {
  onSearch,
  searchFormChange,
})(Users);
