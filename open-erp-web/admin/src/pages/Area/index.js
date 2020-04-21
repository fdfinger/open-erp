import { Button, Card } from "antd";
import React, { useEffect } from "react";
import AreaForm from "./AreaForm";
import AreaSearch from "./AreaSearch";
import AreaTable from "./AreaTable";

import { connect } from "react-redux";
import {
  openAddFormModal,
  EditFormFinish,
  closeFormModel,
  onSearchChange,
  handleSearch,
  openEditFormModal,
  onTableDelete,
  updateDeleteId,
} from "../../store/actions/area";

function Area({
  title,
  editInitValues,
  hasEdit,
  hasEditLoading,
  dataSource,
  count,
  EditFormFinish,
  openAddFormModal,
  closeFormModel,
  onSearchChange,
  handleSearch,
  openEditFormModal,
  onTableDelete,
  searchForm,
}) {
  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <div>
      <AreaSearch
        onChange={onSearchChange}
        onSearch={() => handleSearch({ page: 1 })}
      />
      <Card
        title="数据列表"
        bodyStyle={{ padding: 0 }}
        style={{ marginTop: 20 }}
        extra={
          <Button type="primary" onClick={openAddFormModal}>
            新增
          </Button>
        }
      >
        <AreaTable
          dataSource={dataSource}
          editClick={openEditFormModal}
          deleteClick={(record) => {
            onTableDelete(record.id);
          }}
          pagination={{
            position: ["bottomLeft"],
            current: searchForm.page,
            defaultPageSize: searchForm.pageSize,
            pageSize: searchForm.pageSize,
            total: count,
            showTotal: (total) => `${total}条记录`,
            onChange: (page, pageSize) => {
              onSearchChange({ page, pageSize });
              handleSearch();
            },
          }}
        />
      </Card>
      <AreaForm
        title={title}
        editInitValues={editInitValues}
        hasEdit={hasEdit}
        hasEditLoading={hasEditLoading}
        onFinish={EditFormFinish}
        onClose={closeFormModel}
      />
    </div>
  );
}

const mapStateToProps = ({ area }) => area;

export default connect(mapStateToProps, {
  openAddFormModal,
  EditFormFinish,
  closeFormModel,
  onSearchChange,
  handleSearch,
  openEditFormModal,
  onTableDelete,
  updateDeleteId,
})(Area);
