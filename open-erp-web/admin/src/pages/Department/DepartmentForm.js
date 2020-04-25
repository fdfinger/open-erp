import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button } from "antd";
import { getDataById } from "../../api/department";

const initForm = {
  id: "",
  name: "",
  parent_id: "",
  level: "",
  seq: "",
  remark: "",
  operator: "",
};

const DepartmentForm = (props) => {
  const [formData, setFormData] = useState(initForm);
  const [hasInertBtn, setHasInertBtn] = useState(false);

  const departmentFormRef = useRef();

  useEffect(
    function () {
      getDataById(props.id).then(function (res) {
        setFormData(res.data && res.data[0]);
        departmentFormRef.current && departmentFormRef.current.resetFields();
        if (res.data && res.data.length) {
          setHasInertBtn(true)
        }
      });
    },
    [props.id]
  );

  /** 表单提交成功 */
  const onFinish = (values) => {
    const newFormData = Object.assign(formData, values);
    setFormData(newFormData);
  };

  /** 新增下级 */
  const addNewDepartment = () => {
    const { parent_id, level } = formData
    setHasInertBtn(false)
    setFormData({ parent_id, level: Number(level) + 1 })
  }

  return (
    <div style={{ padding: 20 }}>
      <Form
        initialValues={formData}
        ref={departmentFormRef}
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
            style={{ display: hasInertBtn ? "" : "none" }}
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
