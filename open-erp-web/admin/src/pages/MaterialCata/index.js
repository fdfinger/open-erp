import React, { useEffect } from "react";
import { Layout, Card, Button } from "antd";
import { connect } from "react-redux";
import MaterialCataSearch from "./MaterialCataSearch.js";
import MaterialCataForm from "./MaterialCataForm.js";
import {
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
} from "../../store/actions/materialCata";
import MaterialCataTable from "./MaterialCataTable.js";

function MaterialCata({
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
      <MaterialCataSearch
        onSearch={() => onSearch({ page: 1 })}
        onChange={searchFormChange}
      ></MaterialCataSearch>
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
        <MaterialCataTable
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
      <MaterialCataForm
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

const mapStateToProps = (state) => state.materialCata;

export default connect(mapStateToProps, {
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
})(MaterialCata);
