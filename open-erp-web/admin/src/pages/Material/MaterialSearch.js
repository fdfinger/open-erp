import { Button, Form, Input } from "antd";
import React from "react";
import MaterialCataSelect from '../../components/MaterialCataSelect';
import PageSearch from "../../components/PageSearch";

const selectStyle = {
  width: 168
}

const MaterialSearch = function ({ onSearch, onChange }) {
  const [form] = Form.useForm();

  const onSearchRest = () => {
    form.resetFields();
    onChange({});
  };

  const onValuesChange = (n, vs) => {
    onChange(vs);
  };

  return (
    <PageSearch onSearch={onSearch}>
      <Form form={form} layout="inline" onValuesChange={onValuesChange}>
        <Form.Item name="cataId" label="分类所属">
          <MaterialCataSelect style={selectStyle}/>
        </Form.Item>
        <Form.Item name="name" label="项目名称">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="reset" onClick={onSearchRest.bind(this)}>
            清空
          </Button>
        </Form.Item>
      </Form>
    </PageSearch>
  );
};

export default MaterialSearch;
