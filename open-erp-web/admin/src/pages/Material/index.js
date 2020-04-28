import React, { useEffect } from "react";
import { Layout, Card, Button } from "antd";
import { connect } from "react-redux";
import MaterialSearch from "./MaterialSearch.js";
import MaterialForm from "./MaterialForm.js";
import {
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
} from "../../store/actions/material";
import MaterialTable from "./MaterialTable.js";

function Material({
  title,
  editInitValues,
  hasEdit,
  hasEditLoading,
  dataSource,
  count,
  queryForm,
  onSearch,
  isLoading,
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
      <MaterialSearch
        onSearch={() => onSearch({ page: 1 })}
        onChange={searchFormChange}
      ></MaterialSearch>
      <Card
        title={"数据列表"}
        style={{ marginTop: 16 }}
        bodyStyle={{ padding: 0 }}
        extra={
          <Button type="dashed" onClick={openAddFormModal}>
            新增
          </Button>
        }
      >
        <MaterialTable
          dataSource={dataSource}
          editClick={openEditFormModal}
          deleteClick={(record) => {
            onTableDelete(record.id);
          }}
          loading={isLoading}
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
      <MaterialForm
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

const mapStateToProps = (state) => state.material;

export default connect(mapStateToProps, {
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
})(Material);
