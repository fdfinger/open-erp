import React, { Component } from "react";
import { connect } from "react-redux";
import { initDepartment } from './model/actions'

export class DepartmentSelectCon extends Component {
  componentDidMount(){
    const { getDepartments } = this.props
    getDepartments()
  }
  render() {
    const { departments } = this.props
  return <div>{departments}</div>;
  }
}

const mapStateToProps = (state) => ({
  departments: state.items
});

const mapDispatchToProps = (dispatch) => ({
  getDepartments: () => dispatch(initDepartment([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentSelectCon);
