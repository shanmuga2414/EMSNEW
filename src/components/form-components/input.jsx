import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      {/* <label htmlFor={name} className="label-error-holder">
        {label}
      </label> */}
      <input
        {...rest}
        placeholder={label}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <span className="alert-form-field"> {error}</span>}
    </div>
  );
};

export default Input;
