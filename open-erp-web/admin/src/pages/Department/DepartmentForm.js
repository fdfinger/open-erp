import React, { useEffect, useRef } from "react";
import { Form, Input, Button } from "antd";

const DepartmentForm = (props) => {
  const form = useRef();

  useEffect(() => {
    form.current.resetFields();
  }, [props.initialValues]);

  return (
    <div style={{ padding: 20 }}>
      <Form
        initialValues={props.initialValues}
        ref={form}
        onFinish={props.onFinish}
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
            onClick={props.addChild}
          >
            添加下级部门
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DepartmentForm;
