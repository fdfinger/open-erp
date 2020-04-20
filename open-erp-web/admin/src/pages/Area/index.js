import { Button, Card } from "antd";
import React, { Component } from "react";
import Api from "../../api";
import AreaForm from "./AreaForm";
import AreaSearch from "./AreaSearch";
import AreaTable from "./AreaTable";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { openAddFormModal, EditFormFinish, closeFormModel  } from '../../store/actions/area'

const initFormValues = {
  areaCode: "",
  parentAreaCode: "",
  areaStatus: 0,
};

function Area(props) {
  const { dispatch } = props;

  return (
    <div>
      <Card
        title="数据列表"
        bodyStyle={{ padding: 0 }}
        style={{ marginTop: 20 }}
        extra={
          <Button type="primary" onClick={props.openAddFormModal}>
            新增
          </Button>
        }
      >
        {/* <AreaTable
          dataSource={this.state.dataSource}
          editClick={this.openEditFormModal.bind(this)}
          deleteClick={this.onTableDelete.bind(this)}
        /> */}
      </Card>
      <AreaForm
        title={props.title}
        editInitValues={props.editInitValues}
        hasEdit={props.hasEdit}
        hasEditLoading={props.hasEditLoading}
        onFinish={props.EditFormFinish}
        onClose={props.closeFormModel}
      />
    </div>
  );
}

// class Area extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: [],
//       title: "新增",
//       hasEdit: false,
//       hasEditLoading: false,
//       editInitValues: {},
//       searchForm: initFormValues,
//     };
//   }

//   getList(params = {}) {
//     Api.area.list(params).then((res) => {
//       this.setState({
//         dataSource: (res && res.data.rows) || [],
//       });
//     });
//   }

//   addArea = (params) => {
//     Api.area.insert(params).finally(() => this.getList());
//   };

//   openAddFormModal() {
//     const { dispatch } = this.props;
//     dispatch({
//       type: "AREA_OPEN_FORM_MODEL_TO_ADD",
//       value: {
//         title: "新增",
//         hasEdit: true,
//         editInitValues: initFormValues,
//       },
//     });
//   }

//   openEditFormModal(params = {}) {
//     const { dispatch } = this.props;
//     dispatch({
//       type: "AREA_OPEN_FROM_MODEL_TO_EDIT",
//       value: {
//         title: "编辑",
//         hasEdit: true,
//         editInitValues: params,
//       },
//     });
//   }

//   closeFormModel() {
//     this.setState({
//       hasEdit: false,
//     });
//   }

//   EditFormFinish(r) {
//     this.closeFormModel();
//     this.addArea(r);
//   }

//   componentDidMount() {
//     this.getList();
//   }

//   onSearchChange(v) {
//     this.setState({
//       searchForm: v,
//     });
//   }

//   handleSearch = () => {
//     this.getList(this.state.searchForm);
//   };

//   onTableDelete = (record) => {
//     console.log(record);
//   };

//   render() {
//     return (
//       <div>
//         <AreaSearch
//           onChange={this.onSearchChange.bind(this)}
//           onSearch={this.handleSearch.bind(this)}
//         />
//         <Card
//           title="数据列表"
//           bodyStyle={{ padding: 0 }}
//           style={{ marginTop: 20 }}
//           extra={
//             <Button type="primary" onClick={this.openAddFormModal.bind(this)}>
//               新增
//             </Button>
//           }
//         >
//           <AreaTable
//             dataSource={this.state.dataSource}
//             editClick={this.openEditFormModal.bind(this)}
//             deleteClick={this.onTableDelete.bind(this)}
//           />
//         </Card>
//         <AreaForm
//           title={this.props.title}
//           editInitValues={this.props.editInitValues}
//           hasEdit={this.props.hasEdit}
//           hasEditLoading={this.state.hasEditLoading}
//           onFinish={this.EditFormFinish.bind(this)}
//           onClose={this.closeFormModel.bind(this)}
//         />
//       </div>
//     );
//   }
// }

const mapStateToProps = ({ area }) => area;

// const mapDispatchToProps = (dispatch) => ({
//   openAddFormModal: () => {
//     dispatch({
//       type: "area_open_from_model_to_add",
//       value: { title: "新增", hasEdit: true, editInitValues: initFormValues }
//     })
//   },
//   EditFormFinish: (r) => {
//     console.log(r)
//   },
//   closeFormModel: () => {}
// });

export default connect(mapStateToProps, {
  openAddFormModal,
  EditFormFinish,
  closeFormModel
})(Area);
