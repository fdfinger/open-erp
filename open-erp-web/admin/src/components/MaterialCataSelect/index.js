import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";

const { Option } = Select;

/**
 * 物料分类选择框
 * @param {object} props
 */

function AreaSelect(props) {
  const { selectData, dispatch, ...otherProps } = props
  return (
    <Select {...otherProps}>
      {selectData.map((selectItem) => {
        return (
          <Option key={selectItem.id} value={selectItem.id}>
            {selectItem.code}
          </Option>
        );
      })}
    </Select>
  );
}

const mapStateToProps = function (state) {
  return {
    selectData: state.materialCata.selectData,
  };
};

export default connect(mapStateToProps)(AreaSelect);
