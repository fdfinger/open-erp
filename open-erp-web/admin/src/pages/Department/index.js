import React, { useEffect } from "react";
import { Card, Layout, Row, Col } from "antd";
import DepartmentTree from "./DepartmentTree";
import DepartmentForm from "./DepartmentForm";
import { connect } from "react-redux";
import { getList, getById, setSelectId, onLoadData } from "../../store/actions/department";

// TODO connent store 没有写 明天需要搞一下

function Department({ setSelectId, list, getList, formData, onLoadData }) {
  useEffect(() => {
    getList()
  }, [getList]);
  return (
    <Layout>
      <Card bodyStyle={{ padding: 0, minHeight: "50vh" }}>
        <Row>
          <Col span={6}>
            <DepartmentTree
              onLoadData={onLoadData}
              treeData={list}
              onSelect={(selectedKeys) => {
                setSelectId(selectedKeys[0] || 0);
              }}
            />
          </Col>
          <Col span={18}>
            <DepartmentForm initialValues={formData}/>
          </Col>
        </Row>
      </Card>
    </Layout>
  );
}

const mapStateToProps = (state) => state.department;

export default connect(mapStateToProps, { getList, getById, setSelectId, onLoadData })(
  Department
);
