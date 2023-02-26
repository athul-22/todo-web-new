import React, { useState,useEffect } from "react";
import { ThemeContext, themes } from "./Theme";

export default function ThemeContextWrapper(props){
    const [theme, setTheme ]= useState(themes.dark);

    function changeTheme(theme){
        setTheme(theme);
    }


    useEffect(()=>{
        switch(theme){
            // LIGHT THEME
            case themes.light:
                document.body.classList.add('white');
                break;
            // DARK THEME
            case themes.dark:
                default:
                    document.classList.remove('white');
                break;    
            }
    }, [theme]);

    return(
        <ThemeContext.Provider calue={{ theme: theme, changeTheme:changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}