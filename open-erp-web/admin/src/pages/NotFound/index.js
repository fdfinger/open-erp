import React, { Component } from "react";
import { Result, Button } from "antd";
import { withRouter } from "react-router-dom";

class NotFound extends Component {
  goBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="对不起，该页面未找到！"
        extra={
          <Button type="primary" onClick={this.goBack.bind(this)}>
            返回主页
          </Button>
        }
      ></Result>
    );
  }
}

export default withRouter(NotFound);
