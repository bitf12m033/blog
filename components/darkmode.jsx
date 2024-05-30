'use client'
import useDarkMode from "@/hooks/use-dark-mode";

const nextModeIcons = {
    'light': '🌚',
    'dark': '🌝'
  }


const Darkmode = ({defaultTheme}) => {

    const { theme, toggleTheme } = useDarkMode(defaultTheme)
    return (
        <>
            <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>
        </>
    )
}

export default Darkmode