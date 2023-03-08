import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const Dashboard = () => {
  // https://formik.org/docs/api/useFormik
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },

    onSubmit: (values) => {
      console(values);
    },
  });

  const { values } = formik;
  return <TextField name="name" value={values.name} />;
};

export default Dashboard;
