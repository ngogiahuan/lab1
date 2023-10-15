import React from "react";
import "./Contact.css";
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

  return <div></div>;
}
