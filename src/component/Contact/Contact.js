import React from "react";
import "./Contact.css";
import { ThemeContext } from "../ThemeContext";
import { Button, Container, TextField } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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

    const containerBorderStyle = dark ? "2px solid #E0E3E7" : "none";
    const containerBorderRadius = dark ? "10px" : "0px";

    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setOpen(true);
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div
            className="contact-container"
            style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
            <div className="contact-header">
                <h1>Contact</h1>
            </div>
            <Container
                style={{
                    border: containerBorderStyle,
                    borderRadius: containerBorderRadius,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                            id="filled-basic"
                            label="Name"
                            variant="filled"
                            fullWidth
                            className="textfield"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            inputProps={{ style: { color: theme.color } }}
                            InputLabelProps={{ style: { color: theme.color } }}
                            required
                        />
                        <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            fullWidth
                            className="textfield"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            inputProps={{ style: { color: theme.color } }}
                            InputLabelProps={{ style: { color: theme.color } }}
                            required
                        />
                        <TextField
                            id="filled-basic"
                            label="Phone"
                            variant="filled"
                            fullWidth
                            className="textfield"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            inputProps={{ style: { color: theme.color } }}
                            InputLabelProps={{ style: { color: theme.color } }}
                            required
                        />
                        <TextField
                            id="filled-basic"
                            label="Message"
                            variant="filled"
                            fullWidth
                            multiline
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="textfield"
                            inputProps={{ style: { color: theme.color } }}
                            InputLabelProps={{ style: { color: theme.color } }}

                        />
                    </ThemeProvider>
                    <Button variant="contained" className="submit-btn" type="submit">
                        Submit
                    </Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Send Message Successfully!
                        </Alert>
                    </Snackbar>
                </form>
            </Container>
        </div>
    );
}
