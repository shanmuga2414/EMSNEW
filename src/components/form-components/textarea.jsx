import React from "react";

const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="label-error-holder">
        {label}
      </label>
      <textarea {...rest} name={name} id={name} className="form-control" ></textarea>
      {error && <span className="alert-form-field"> {error}</span>}
    </div>
  );
};

export default Textarea;