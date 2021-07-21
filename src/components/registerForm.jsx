import React from "react";
import Form from "./form-components/form";
import Joi from "joi-browser";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import { Link } from "react-router-dom";
import Footer from "./global-components/footer";
// import * as employeeServices from "../services/employeeServices";

class RegisterForm extends Form {
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

  schema = {
    name: Joi.string().required().label("Name"),
    mobile: Joi.string().required().label("Mobile"),
    qualification: Joi.string().required().label("qualification"),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
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
              <div className="col-md-4 col-md-offset-4">
              </div>
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                <div className="account-wall">
                  <img
                    className="profile-img"
                    src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt=""
                  />
                  <form onSubmit={this.handleSubmit} className="form-signin">
                    {/* BEGIN :: FORM GROUP | GRID-2 */}
                    <div className="form-group field-grid-1">
                      <div>{this.renderInput("text", "Name")}</div>
                    </div>
                    <div className="form-group field-grid-1">
                      <div>{this.renderInput("text", "Mobile")}</div>
                    </div>
                    <div className="form-group field-grid-1">
                      <div>{this.renderInput("text", "Qualification")}</div>
                    </div>
                    <div className="form-group field-grid-1">
                      <div>{this.renderInput("email", "Email")}</div>
                    </div>
                    <div className="form-group field-grid-1">
                      <div>
                        {this.renderInput("password", "Password", "password")}
                      </div>
                    </div>
                    <div>
                      <button
                        disabled={this.validate()}
                        className="btn btn-style-1"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <Link to="login" className="text-center new-account">
                  Login to account
                </Link>
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
