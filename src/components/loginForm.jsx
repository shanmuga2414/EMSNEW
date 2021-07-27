import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Component } from "react";
// import auth from "../Services/authService";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: "",
      },
      errors: {},
      value: 2,
    };
  }

  onFinish = async () => {
    // try {
    //   const { data } = this.state;
    //   await auth.login(data.email, data.password);
    //   window.location = "/dashboard";
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.email = ex.response.data;
    //     this.setState({ errors });
    //     console.log("errors->", this.state.errors);
    //   }
    // }
  };

  render() {
    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Login  " />
        <div className="align-center">
          <section className="loginBlock">
            <div className="container container-login">
              <div className="row">
                <div className=" col-md-4 col-md-offset-4"></div>
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                  <div className="account-wall div-border">
                    <img
                      className="profile-img"
                      src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                      alt=""
                    />
                    <h3 className="pb-2">Login</h3>
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={this.onFinish}
                    >
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Username!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                          placeholder="Username"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Password!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          block
                          type="danger"
                          htmlType="submit"
                          className="btn btn-style-1"
                        >
                          Log in
                        </Button>
                        <center><a className="login-form-forgot" href="">
                          Are you forgot your password?
                        </a></center>
                      </Form.Item>
                          <hr></hr>
                          <center><span>New to EMS?</span></center>
                      <Form.Item>
                        <center><Link
                          class="text-center new-account btn btn-grey"
                          to="register"
                        >
                          Create Your EMS account
                        </Link></center>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LoginForm;
