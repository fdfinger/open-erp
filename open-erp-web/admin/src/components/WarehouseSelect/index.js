import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";

const { Option } = Select;

/**
 * 仓库选择框
 * @param {object} props
 */

function WarehouseSelect(props) {
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
    selectData: state.warehouse.selectData,
  };
};

export default connect(mapStateToProps)(WarehouseSelect);
