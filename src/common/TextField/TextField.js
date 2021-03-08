import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.css";

export const TextField = ({ label, ...props }) => {
  // const [field, meta] = useField(props);
  const [field] = useField(props);
  // console.log(field, meta);
  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{label}</label>

      <input
        type={props.type}
        className={`form-control shadow-none`}
        autoComplete="off"
        {...field}
        {...props}
      />

      <ErrorMessage
        component="div"
        name={field.name}
        className="error-textfield"
      />
    </div>
  );
};
