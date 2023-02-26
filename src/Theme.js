import { createContext } from "react";

export const themes = {
    darkTheme:"",
    lightTheme:"whiite",
}

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme:()=>{},
});