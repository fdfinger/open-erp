import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";

const { Option } = Select;

/**
 * 部门选择框
 * @param {object} props
 */

function DepartmentSelect(props) {
  const { selectData, dispatch, ...otherProps } = props
  return (
    <Select {...otherProps}>
      {selectData.map((selectItem) => {
        return (
          <Option key={selectItem.id} value={selectItem.id}>
            {selectItem.name}
          </Option>
        );
      })}
    </Select>
  );
}

const mapStateToProps = function (state) {
  return {
    selectData: state.department.selectData,
  };
};

export default connect(mapStateToProps)(DepartmentSelect);
