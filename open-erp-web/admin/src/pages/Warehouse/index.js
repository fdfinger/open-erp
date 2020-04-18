import React, { Component } from "react";
import WarehouseSearch from "./WarehouseSearch";
import WarehouseTable from "./WarehouseTable";
import Api from "../../api";
import { Card, Button } from "antd";
import WarehouseForm from "./WarehouseForm";

const initFormValues = {
  area_code: "",
  parent_area_code: "",
  area_status: 0,
};

export default class Warehouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      title: "新增",
      hasEdit: false,
      hasEditLoading: false,
      editInitValues: {},
      searchForm: initFormValues,
    };
  }

  getList(params = {}) {
    Api.warehouse.list(params).then((res) => {
      this.setState({
        dataSource: (res && res.data) || [],
      });
    });
  }

  addArea = (params) => {
    Api.warehouse.insert(params).finally(() => this.getList());
  };

  openAddFormModal() {
    this.setState({
      title: "新增",
      hasEdit: true,
      editInitValues: initFormValues,
    });
  }

  openEditFormModal(params = {}) {
    this.setState({
      title: "编辑",
      hasEdit: true,
      editInitValues: params,
    });
  }

  closeFormModel() {
    this.setState({
      hasEdit: false,
    });
  }

  EditFormFinish(r) {
    this.closeFormModel();
    this.addArea(r);
  }

  componentDidMount() {
    this.getList();
  }

  onSearchChange(v) {
    this.setState({
      searchForm: v,
    });
  }

  handleSearch = () => {
    this.getList(this.state.searchForm);
  };

  onTableDelete = (record) => {
    console.log(record);
  };

  render() {
    return (
      <div>
        <WarehouseSearch
          onChange={this.onSearchChange.bind(this)}
          onSearch={this.handleSearch.bind(this)}
        />
        <Card
          title="数据列表"
          bodyStyle={{ padding: 0 }}
          style={{ marginTop: 20 }}
          extra={
            <Button type="primary" onClick={this.openAddFormModal.bind(this)}>
              新增
            </Button>
          }
        >
          <WarehouseTable
            dataSource={this.state.dataSource}
            editClick={this.openEditFormModal.bind(this)}
            deleteClick={this.onTableDelete.bind(this)}
          />
        </Card>
        <WarehouseForm
          title={this.state.title}
          editInitValues={this.state.editInitValues}
          hasEdit={this.state.hasEdit}
          hasEditLoading={this.state.hasEditLoading}
          onFinish={this.EditFormFinish.bind(this)}
          onClose={this.closeFormModel.bind(this)}
        />
      </div>
    );
  }
}
