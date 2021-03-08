import { Formik, Form } from "formik";
import React from "react";
import { TextField } from "../../common/TextField/TextField";
import { ImageField } from "../../common/ImageField/ImageField";
import * as Yup from "yup";

const SignUpForm = () => {
  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const phoneNoRegex = /^((\+91)?|91|(\+91 ))?[789][0-9]{9}$/;
  const validate = Yup.object().shape({
    uName: Yup.string().max(20, "Must be 20 character").required("required"),
    email: Yup.string().email("Email is Invalid").required("required"),
    phoneNo: Yup.string().matches(
      phoneNoRegex,
      `invalid no. OR Phone is not indian no.`
    ),
    password: Yup.string()
      .min(6, " Must be at least 6 characters")
      .required("required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must be match")
      .required("required"),
    pPhoto: Yup.mixed()
      .required("required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  const initialValues = {
    pPhoto: undefined,
    uName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values) => console.log("onSubmit", values)}
      onReset={(values) => console.log("onReset", values)}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <h2 className="my-4 font-weight-bold display-4">SignUp</h2>
          {/* {console.log("SingUpForm.js\n", formik)} */}
          <ImageField
            label="Photo"
            name="pPhoto"
            type="file"
            changed={(event) => {
              formik.setFieldValue("pPhoto", event.target.files[0]);
            }}
            errorMessage={
              formik.errors["pPhoto"] ? formik.errors["pPhoto"] : undefined
            }
            touched={formik.touched["pPhoto"]}
          />

          <TextField label="Name" name="uName" type="text" />
          <TextField label="Email" name="email" type="email" />
          <TextField label="PhoneNo" name="phoneNo" type="text" />
          <TextField label="Password" name="password" type="password" />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <button className="btn btn-primary mt-3" type="submit">
            Submit
          </button>
          <button className="btn btn-danger mt-3 ml-3" type="reset">
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
