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
  EditFormFinish,
  openAddFormModal,
  closeFormModel,
  onSearchChange,
  handleSearch,
  openEditFormModal,
  onTableDelete,
  updateDeleteId,
}) {
  useEffect(() => {
    handleSearch();
  }, [title]);

  return (
    <div>
      <AreaSearch onChange={onSearchChange} onSearch={handleSearch} />
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
          deleteClick={(id) => {
            updateDeleteId(id);
            onTableDelete();
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
