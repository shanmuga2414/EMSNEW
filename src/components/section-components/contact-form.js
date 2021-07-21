import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Form from "../form-components/form";
import Joi from "joi-browser";
import * as contactServices from "../../Services/contact-page-services";

class ContactForm extends Form {
  state = {
    data: {
      name: "",
      phone: "",
      msg: "",
      email: "",
      topic: "",
    },
    errors: {},
    value: 2,
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.string().required().label("Phone"),
    msg: Joi.string().required().label("Message"),
    topic: Joi.string().required().label("Subject"),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  };

  doSubmit = async () => {
    try {
      const response = await contactServices.saveContact(this.state.data);
      if (response.status >= 200) {
        this.props.history.push("/contact");
      }
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.name = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div className="contact-form text-center padding-top-80 padding-bottom-80">
        <div className="container">

          <div className="row">
            <div className="col-md-12 contact-div">
            <h4 className="text-center">தொடர்பு கொள்ள</h4>
              <form onSubmit={this.handleSubmit} className="contact_form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    {this.renderInput("name", "Name")}
                  </div>
                  <div className="form-group col-md-6">
                    {this.renderInput("phone", "Phone")}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    {this.renderInput("email", "Email")}
                  </div>
                  <div className="form-group col-md-6">
                    {this.renderInput("topic", "Topic")}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    {this.renderTextarea("msg", "Message")}
                  </div>
                </div>
                <button type="submit" className="btn btn-contact">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
