import React from "react";
import PageSearch from "../../components/PageSearch";
import { Form, Input, Button } from "antd";

const AreaSearch = function (props) {
  const [form] = Form.useForm();
  const handleSearch = () => {
    props.onSearch()
  };

  const onSearchRest = () => {
    form.resetFields();
    props.onChange({})
  };

  const onValuesChange = (n, vs) => {
    props.onChange(vs)
  }

  return (
    <PageSearch onSearch={handleSearch.bind(this)}>
      <Form form={form} layout="inline" onValuesChange={onValuesChange}>
        <Form.Item name="area_name" label="地区名称">
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

export default AreaSearch;
