//reference from:https : //codesandbox.io/s/4wrrx8qok0?file=/src/App.js:2110-2210
import React from "react";
import { useField } from "formik";
import "./ImageField.css";
import Thumbnail from "./Thumbnail";

export const ImageField = ({ label, ...props }) => {
  // const [field, meta] = useField(props);
  const [field] = useField(props);
  field.onChange = props.changed;

  // console.log(
  //   "\nfield:\n",
  //   field,
  //   "\nmeta:\n",
  //   meta,
  //   "\nerrorMessage:\n",
  //   props.errorMessage
  // );

  return (
    <>
      {props.errorMessage ? (
        <div className="error-imagefield">{props.errorMessage}</div>
      ) : (
        <div className="my-thumbnail-container">
          <Thumbnail file={field.value} />
        </div>
      )}

      <div className="image-field-container mb-1">
        <label htmlFor={props.name} className="file-label">
          <button className="inner-lable-btn btn btn-primary rounded-pill">
            Photo
          </button>
        </label>

        <input
          className={`form-control file-input`}
          type={props.type}
          name={props.name}
          onChange={field.onChange}
        />
      </div>
    </>
  );
};
