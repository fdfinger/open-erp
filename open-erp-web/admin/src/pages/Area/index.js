import React, { Component } from "react";
import AreaSearch from "./AreaSearch";
import AreaTable from "./AreaTable";
import Api from "../../api";
import { Card, Button } from "antd";
import AreaForm from "./AreaForm";

const initFormValues = {
  areaCode: "",
  parentAreaCode: "",
  areaStatus: 0,
};

export default class Area extends Component {
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
    Api.area.list(params).then((res) => {
      this.setState({
        dataSource: (res && res.data.rows) || [],
      });
    });
  }

  addArea = (params) => {
    Api.area.insert(params).finally(() => this.getList());
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
        <AreaSearch
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
          <AreaTable
            dataSource={this.state.dataSource}
            editClick={this.openEditFormModal.bind(this)}
            deleteClick={this.onTableDelete.bind(this)}
          />
        </Card>
        <AreaForm
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
