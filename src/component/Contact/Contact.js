import React from 'react'
import './Contact.css'
import { ThemeContext } from '../ThemeContext'
import { Button, Container, FormControl, Grid, TextField } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#79CD55',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },

            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&:before, &:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

export default function Contact() {
    const { theme, dark } = React.useContext(ThemeContext);
    const outerTheme = useTheme();

    const containerBorderStyle = dark ? '2px solid #E0E3E7' : 'none';
    const containerBorderRadius = dark ? '10px' : '0px';

    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can perform actions with formData, e.g., send it to a server.
        console.log(formData);
        // Reset the form fields if needed
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="contact-container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className="contact-header"><h1>Contact</h1></div>
            <Container style={{ border: containerBorderStyle, borderRadius: containerBorderRadius }}>
                <form onSubmit={handleSubmit}>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField id="filled-basic" label="Name" variant="filled" fullWidth className='textfield' name='name'
                            value={formData.name} onChange={handleInputChange}
                            inputProps={{ style: { color: theme.color } }} InputLabelProps={{ style: { color: theme.color } }}
                        />
                        <TextField id="filled-basic" label="Email" variant="filled" fullWidth className='textfield' name='email' value={formData.email} onChange={handleInputChange}
                            inputProps={{ style: { color: theme.color } }} InputLabelProps={{ style: { color: theme.color } }}
                        />
                        <TextField id="filled-basic" label="Phone" variant="filled" fullWidth className='textfield' name='phone' value={formData.phone} onChange={handleInputChange}
                            inputProps={{ style: { color: theme.color } }} InputLabelProps={{ style: { color: theme.color } }}
                        />
                        <TextField id="filled-basic" label="Message" variant="filled" fullWidth multiline rows={5}
                            name='message' value={formData.message} onChange={handleInputChange}
                            className='textfield'
                            inputProps={{ style: { color: theme.color } }} InputLabelProps={{ style: { color: theme.color } }}
                            sx={{ marginBottom: '20px' }}
                        />
                    </ThemeProvider>
                    <Button variant="contained" className='submit-btn' type='submit'>Submit</Button>
                </form>
            </Container>
        </div >
    )
}
