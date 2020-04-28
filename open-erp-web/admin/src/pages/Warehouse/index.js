import React, { useEffect } from "react";
import WarehouseSearch from "./WarehouseSearch";
import WarehouseTable from "./WarehouseTable";
import { Layout, Card, Button } from "antd";
import WarehouseForm from "./WarehouseForm";
import { connect } from "react-redux";
import {
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
} from "../../store/actions/warehouse";

function Warehouse({
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
      <WarehouseSearch
        onSearch={() => onSearch({ page: 1 })}
        onChange={searchFormChange}
      ></WarehouseSearch>
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
        <WarehouseTable
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
      <WarehouseForm
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

const mapStateToProps = (state) => state.warehouse;

export default connect(mapStateToProps, {
  onSearch,
  searchFormChange,
  closeFormModel,
  openEditFormModal,
  openAddFormModal,
  editFormFinish,
  onTableDelete,
})(Warehouse);
