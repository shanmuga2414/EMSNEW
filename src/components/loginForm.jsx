import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Form from "./form-components/form";
import Joi from "joi-browser";
import Footer from "./global-components/footer";
import { Link } from "react-router-dom";
// import auth from "../Services/authService";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
    value: 2,
  };

  schema = {
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
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
                <div className=" col-md-4 col-md-offset-4">
                </div>
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                  <div className="account-wall div-border">
                  
                    <img
                      className="profile-img"
                      src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                      alt=""
                    /><h3>Login</h3>
                    <form onSubmit={this.handleSubmit} className="form-signin">
                      {/* BEGIN :: FORM GROUP | GRID-2 */}
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
                          className="btn btn-style-1 bg-red form-control"
                        >
                          Login
                        </button>
                        <br></br>

                        <Link className="text-center new-account" to="#">
                      Forgot Password?
                    </Link><br></br>
                    <hr></hr>
                        <span className="">New to EMS Media?</span><br></br>
                        <Link className="text-center new-account btn btn-grey" to="register">
                      Create Your EMS account
                    </Link>
                      </div>
                    </form>
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
