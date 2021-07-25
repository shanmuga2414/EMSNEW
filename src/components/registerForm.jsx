import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import { Link } from "react-router-dom";
import Footer from "./global-components/footer";
import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
const { Option } = Select;
// import * as employeeServices from "../services/employeeServices";

class RegisterForm extends Component {
  state = {
    data: {
      name: "",
      mobile: "",
      qualification: "",
      email: "",
      password: "",
    },
    errors: {},
    value: 2,
  };

  onFinish = async () => {
    // try {
    //   const response = await employeeServices.register(this.state.data);
    //   if (response.status >= 200) {
    //     this.props.history.push("/employees");
    //   }
    // } catch (ex) {
    //   const errors = { ...this.state.errors };
    //   errors.name = ex.response.data;
    //   this.setState({ errors });
    // }
  };

  render() {
    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Register" />
        <section className="loginBlock">
          <div className="container container-login">
            <div className="row">
              <div className="col-md-2 col-md-offset-4"></div>
              <div className="col-sm-8 col-md-8 col-md-offset-4">
                <div className="account-wall div-border">
                  <img
                    className="profile-img"
                    src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt=""
                  />

                  <h3>Create Account</h3>
                  <Form
                    name="register"
                    onFinish={this.onFinish}
                    // initialValues={{
                    //   residence: ["zhejiang", "hangzhou", "xihu"],
                    //   prefix: "86",
                    // }}
                    scrollToFirstError
                  >
                    <div class="row">
                      <div class="col-lg-6">
                        <Form.Item
                          name="name"
                          label="Name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Name!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                      <div class="col-lg-6">
                        <Form.Item
                          name="qualification"
                          label="Qualification"
                          rules={[
                            {
                              required: true,
                              message: "Please select your qualification!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Select placeholder="select your gender">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <Form.Item
                          name="email"
                          label="E-mail"
                          rules={[
                            {
                              type: "email",
                              message: "The input is not valid E-mail!",
                            },
                            {
                              required: true,
                              message: "Please input your E-mail!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                      <div class="col-lg-6">
                        <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input.Password />
                        </Form.Item>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default RegisterForm;
