import React from "react";
import "./Contact.css";
import { ThemeContext } from "../ThemeContext";
import { Button, Container, TextField } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#79CD55",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },

      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export default function Contact() {
  const { theme, dark } = React.useContext(ThemeContext);
  const outerTheme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClodeError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      name: Yup.string().required("Required").min(3, "Too Short!"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required").min(10, "Too Short!"),
      message: Yup.string(),
    }),
  });

  return (
    <div
      className="contact-container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="contact-header">
        <h1>Contact</h1>
      </div>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              id="filled-basic"
              placeholder="Name"
              variant="filled"
              fullWidth
              className="textfield"
              name="name"
              inputProps={{ style: { color: theme.color } }}
              InputLabelProps={{ style: { color: theme.color } }}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              id="filled-basic"
              placeholder="Email"
              variant="filled"
              fullWidth
              className="textfield"
              name="email"
              inputProps={{ style: { color: theme.color } }}
              InputLabelProps={{ style: { color: theme.color } }}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextField
              id="filled-basic"
              placeholder="Phone"
              variant="filled"
              fullWidth
              className="textfield"
              name="phone"
              inputProps={{ style: { color: theme.color } }}
              InputLabelProps={{ style: { color: theme.color } }}
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <TextField
              id="filled-basic"
              placeholder="Message"
              variant="filled"
              fullWidth
              multiline
              rows={5}
              name="message"
              className="textfield"
              inputProps={{ style: { color: theme.color } }}
              InputLabelProps={{ style: { color: theme.color } }}
              value={formik.values.message}
              onChange={formik.handleChange}
            />
          </ThemeProvider>
          <Button variant="contained" className="submit-btn" type="submit">
            Submit
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Send Message Successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={errorSnackbar}
          autoHideDuration={6000}
          onClose={handleClodeError}
        >
          <Alert
            onClose={handleClodeError}
            severity="error"
            sx={{ width: "100%" }}
          >
            {formik.errors.name && formik.touched.name && formik.errors.name}
            {formik.errors.email && formik.touched.email && formik.errors.email}
            {formik.errors.phone && formik.touched.phone && formik.errors.phone}
            {formik.errors.message &&
              formik.touched.message &&
              formik.errors.message}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}
