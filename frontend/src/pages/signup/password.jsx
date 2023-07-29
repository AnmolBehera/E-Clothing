// import React from "react";
export const SignUpValidate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.pass) {
    errors.pass = "";
  } else if (values.pass.length < 6) {
    errors.pass = "Minimum 6 digits Required";
  } else if (checkPassword(values.pass)) {
    errors.pass = "Password must include uppercase, lowercase, and numbers.";
  }

 
  return errors;
};

const checkPassword = (pass) => {
  const hasUppercase = /[A-Z]/.test(pass);
  const hasLowercase = /[a-z]/.test(pass);
  const hasNumber = /[0-9]/.test(pass);

  return hasUppercase && hasLowercase && hasNumber;
};