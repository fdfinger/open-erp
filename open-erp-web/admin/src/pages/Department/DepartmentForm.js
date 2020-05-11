import React, { useEffect, useRef } from "react";
import { Form, Input, Button } from "antd";

const DepartmentForm = (props) => {
  const form = useRef();

  useEffect(() => {
    form.current.resetFields();
  }, [props.initialValues]);

  /** 表单提交成功 */
  const onFinish = (values) => {
    console.log(values);
  };

  /** 新增下级 */
  const addNewDepartment = () => {
    console.log('values');
  };

  return (
    <div style={{ padding: 20 }}>
      <Form
        initialValues={props.initialValues}
        ref={form}
        onFinish={onFinish.bind(this)}
      >
        <Form.Item name="name" label="部门名称">
          <Input />
        </Form.Item>
        <Form.Item name="seq" label="排序">
          <Input />
        </Form.Item>
        <Form.Item name="remark" label="备注">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button
            className="m-l-20"
            style={{ display: props.initialValues.id ? "" : "none" }}
            onClick={addNewDepartment.bind(this)}
          >
            添加下级部门
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DepartmentForm;
