import { useEffect } from "react";
import { useState } from "react";
import React from "react";
const themes= {
    dark:{
        backgroundColor: "#171717",
        color: "#fff"
    },
    light:{
        backgroundColor: "#fff",
        color: "#000"
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
}

const ThemeContext = React.createContext(initialState);

function ThemeProvider ({children}){
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    const toggle = () =>{
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }

    const theme = dark ? themes.dark : themes.light;

    return(
        <ThemeContext.Provider value={{theme, dark, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}