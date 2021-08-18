import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import { Link, Redirect } from "react-router-dom";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import * as authServices from "../Services/authService";
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
  DatePicker,
  message,
  Modal,
} from "antd";
const { Option } = Select;
// import * as employeeServices from "../services/employeeServices";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: "",
      dateOfBirth: "",
      dateOfBaiyath: "",
      username: "",
    };
  }
  selectCountry(val) {
    this.setState({ country: val });
  }

  handleBirthChange = (date, dateString) => {
    this.setState({ dateOfBirth: dateString });
  };
  handleBaiyathChange = (date, dateString) => {
    this.setState({ dateOfBaiyath: dateString });
  };

  selectRegion(val) {
    this.setState({ region: val });
  }
  ErrorMessage(msg) {
    const modal = Modal.success({
      title: "This is a notification message",
      content: msg,
    });
  }
  checkEmail = async (email) => {
    if (email !== "") {
      const response = await authServices.checkEmailAlreadyExist(email);
      if (response.status >= 200) {
        if (response.data.status === "2") {
          this.ErrorMessage(
            `This "${email}" email already exist. Give new E-mail...`
          );
          document.getElementById("register_email").value = "";
        } else {
        }
      }
    }
  };
  checkUsername = async (username) => {
    console.log(username);
    if (username !== "") {
      const response = await authServices.checkUsernameAlreadyExist(username);
      if (response.status >= 200) {
        if (response.data.status === "2") {
          this.ErrorMessage(
            `This "${username}" username already exist. Give new username...`
          );
          this.checkUsername("");
          this.setState({ username: "qqqq" });
          //document.getElementById("register_username").value = "";
        } else {
        }
      }
    }
  };

  success = () => {
    message.success({
      content:
        "Registration Completed Successfully. Please check your registered email for email verification !",
      duration: 10,
      className: "custom-class",
      style: {
        marginTop: "40vh",
      },
    });
  };
  onFinish = async (values) => {
    values.dateOfBirth = this.state.dateOfBirth;
    values.dateOfBaiyath = this.state.dateOfBaiyath;

    try {
      const response = await authServices.saveUser(values);
      if (response.status >= 200) {
        // if (response.data === 1) {
        console.log("success");
        this.success();
        this.props.history.push("/login");
        // } else {
      } else {
        this.props.history.push("/register");
      }
    } catch (ex) {
      const errors = { ...this.state.errors };
      // errors.name = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    const qualification = ["S.S.L.C", "Engineer", "UG", "PG", "Doctorate[Phd]"];
    const bloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    const { country, region, username } = this.state;
    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Register" />
        <section className="loginBlock">
          <div className="container">
            <div className="row register-form">
              <div className="col-xl-2 col-lg-1"></div>
              <div className="col-xl-8 col-lg-10 col-md-12">
                <div className="account-wall div-border" id="register_form">
                  <i className="fas fa-user-plus register-user"></i>

                  <h3 className="text-center">Create Your EMS Account</h3>
                  <Form
                    name="register"
                    onFinish={this.onFinish}
                    // initialValues={{
                    //   residence: ["zhejiang", "hangzhou", "xihu"],
                    //   prefix: "86",
                    // }}
                    scrollToFirstError
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
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
                      <div className="col-md-6">
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
                          <Select
                            className="ant-input"
                            placeholder="select your qualification"
                          >
                            {qualification.map((qualification, i) => (
                              <Option key={i} value={qualification}>
                                {qualification}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="fatherName"
                          label="Father Name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Father Name!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="ug"
                          label="UG Specialization"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="dateOfBirth"
                          label="Date Of Birth"
                          hasFeedback
                        >
                          <DatePicker onChange={this.handleBirthChange} />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="pg"
                          label="PG Specialization"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="dateOfBaiyath"
                          label="Date Of Baiyath"
                          hasFeedback
                        >
                          <DatePicker onChange={this.handleBaiyathChange} />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item name="bloodGroup" label="Blood Group">
                          <Select
                            className="ant-input"
                            placeholder="select your blood group"
                            hasFeedback
                          >
                            {bloodGroup.map((bg, j) => (
                              <Option key={j} value={bg}>
                                {bg}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="gender"
                          label="Gender"
                          rules={[
                            {
                              required: true,
                              message: "Please select your gender!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Select
                            className="ant-input"
                            placeholder="select your gender"
                          >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="yaseeni"
                          label="Are you a Yaseeni ?"
                          hasFeedback
                        >
                          <Select className="ant-input" placeholder="select">
                            <Option value="1">Yes</Option>
                            <Option value="0">No</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="presentAddress"
                          label="Present Address"
                          hasFeedback
                        >
                          <Input.TextArea />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="permanentAddress"
                          label="Permanent Address"
                          hasFeedback
                        >
                          <Input.TextArea />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="country"
                          label="Country(Currently Residing)"
                          rules={[
                            {
                              required: true,
                              message: "Please select your Country!",
                            },
                          ]}
                          hasFeedback
                        >
                          <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)}
                          />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="state"
                          label="State(Currently Residing)"
                          rules={[
                            {
                              required: true,
                              message: "Please select your State!",
                            },
                          ]}
                          hasFeedback
                        >
                          <RegionDropdown
                            blankOptionLabel="No country selected"
                            defaultOptionLabel="Now select a region"
                            country={country}
                            value={region}
                            onChange={(val) => this.selectRegion(val)}
                          />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <Form.Item
                          name="city"
                          label="City(Currently Residing)"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="col-md-6">
                        <Form.Item
                          name="username"
                          label="User Name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input
                            value={username}
                            onBlur={(e) => this.checkUsername(e.target.value)}
                          />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 ">
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
                        >
                          <Input
                            onBlur={(e) => this.checkEmail(e.target.value)}
                          />
                        </Form.Item>
                      </div>
                      <div className="col-md-6">
                        <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                            {
                              min: 6,
                              message: "Password should be minimum 6 chars",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input.Password />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="contactNo"
                          label="Contact Number"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="alternateNo"
                          label="Alternate Number"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                      <Form.Item>
                        <center>
                          <Button
                            block
                            type="danger"
                            htmlType="submit"
                            className="btn btn-style-1 register-btn"
                          >
                            Register
                          </Button>
                        </center>
                      </Form.Item>
                    </div>
                    <div className="row text-center">
                      <Form.Item>
                        <span className="text-center new-account ">
                          Already have an account?{" "}
                          <a href="#/login" className="login-text-style">
                            Login
                          </a>
                        </span>
                      </Form.Item>
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
