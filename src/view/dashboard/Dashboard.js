import { Box, Button, TextField } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
// https://www.npmjs.com/package/yup
// https://stackoverflow.com/questions/66680964/yup-import-problems-in-react
// https://formik.org/docs/examples/with-material-ui
import * as yup from "yup";

const Dashboard = ({ setAllData }) => {
  const navigate = useNavigate();

  // https://formik.org/docs/api/useFormik
  // https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
  const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  let userSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .required("Phone is Required")
      .matches(phoneRegExp, "Phone number is not valid"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log(values);
      setAllData(values);
      navigate("dashboard/address");
    },
  });

  const {
    values,
    setFieldValue,
    handleSubmit,
    touched,
    errors,
    getFieldProps,
  } = formik;
  return (
    <Formik>
      <Form onSubmit={handleSubmit}>
        <Box style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <TextField
            label="Name"
            name="name"
            value={values.name}
            onChange={(e) => {
              setFieldValue("name", e.target.value);
            }}
            {...getFieldProps("name")}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            label="Email"
            name="email"
            value={values.email}
            onChange={(e) => {
              setFieldValue("email", e.target.value);
            }}
            {...getFieldProps("email")}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            label="Phone"
            name="phone"
            value={values.email}
            onChange={(e) => {
              setFieldValue("email", e.target.value);
            }}
            {...getFieldProps("phone")}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default Dashboard;
