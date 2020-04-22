import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";

const { Option } = Select;

/**
 * 地区选择框
 * @param {object} props
 */

function AreaSelect(props) {
  const { selectData, dispatch, ...otherProps } = props
  return (
    <Select {...otherProps}>
      {selectData.map((selectItem) => {
        return (
          <Option key={selectItem.areaCode} value={selectItem.areaCode}>
            {selectItem.areaName}
          </Option>
        );
      })}
    </Select>
  );
}

const mapStateToProps = function (state) {
  return {
    selectData: state.area.selectData,
  };
};

export default connect(mapStateToProps)(AreaSelect);
