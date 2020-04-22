import React from "react";
import PageSearch from "../../components/PageSearch";
import DepartmentSelect from '../../components/DepartmentSelect'
import { Form, Input, Button } from "antd";

const UserSearch = function ({ onSearch, onChange }) {
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
        <Form.Item name="departmentId" label="部门名称">
          <DepartmentSelect style={{ width: 168 }} />
        </Form.Item>
        <Form.Item name="username" label="用户姓名">
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

export default UserSearch;
