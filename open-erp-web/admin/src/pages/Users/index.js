import React, { useEffect } from "react";
import { Layout, Card, Button } from "antd";
import { connect } from "react-redux";
import UserSearch from "./UserSearch.js";
import UserForm from "./UserForm.js";
import {
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
} from "../../store/actions/user";
import UserTable from "./UserTable.js";

function Users({
  title,
  editInitValues,
  hasEdit,
  hasEditLoading,
  dataSource,
  count,
  queryForm,
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
}) {
  useEffect(() => {
    onSearch();
  }, [onSearch]);
  return (
    <Layout>
      <UserSearch
        onSearch={() => onSearch({ page: 1 })}
        onChange={searchFormChange}
      ></UserSearch>
      <Card
        title={"数据列表"}
        style={{ marginTop: 16 }}
        bodyStyle={{ padding: 0 }}
        extra={
          <Button type="primary" onClick={openAddFormModal}>
            新增
          </Button>
        }
      >
        <UserTable
          dataSource={dataSource}
          editClick={openEditFormModal}
          deleteClick={(record) => {
            onTableDelete(record.id);
          }}
          pagination={{
            position: ["bottomLeft"],
            current: queryForm.page,
            defaultPageSize: queryForm.pageSize,
            pageSize: queryForm.pageSize,
            total: count,
            showTotal: (total) => `${total}条记录`,
            onChange: (page, pageSize) => {
              searchFormChange({ page, pageSize });
              onSearch();
            },
          }}
        />
      </Card>
      <UserForm
        title={title}
        editInitValues={editInitValues}
        hasEdit={hasEdit}
        hasEditLoading={hasEditLoading}
        onFinish={editFormFinish}
        onClose={closeFormModel}
      />
    </Layout>
  );
}

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps, {
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
})(Users);
