import React from "react";
import PageSearch from "../../components/PageSearch";
import DepartmentSelect from '../../components/DepartmentSelect'
import { Form, Input, Button, Select } from "antd";

const ProcessSearch = function ({ onSearch, onChange }) {
  const [form] = Form.useForm();

  const onSearchRest = () => {
    form.resetFields();
    onChange({})
  };

  const onValuesChange = (n, vs) => {
    onChange(vs)
  }

  return (
    <PageSearch onSearch={onSearch}>
      <Form form={form} layout="inline" onValuesChange={onValuesChange}>
        <Form.Item name="cataId" label="分类名称">
          <DepartmentSelect style={{ width: 168 }} />
        </Form.Item>
        <Form.Item name="proName" label="用户姓名">
          <Input />
        </Form.Item>
        <Form.Item name="proStatus" label="启用状态">
          <Select style={{ width: 80 }}>
            <Select.Option value={1}>是</Select.Option>
            <Select.Option value={0}>否</Select.Option>
          </Select>
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

export default ProcessSearch;
