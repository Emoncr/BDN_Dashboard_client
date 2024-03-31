import { Moon, Sun } from 'lucide-react'
import React from 'react'

const DarkMode = ({ darkModeInfo }) => {
    const { darkMode, setDarkMode } = darkModeInfo;
    console.log(darkMode);
    return (
        <div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="h-10 w-10 bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-900 font-bold text-text_secondary_gray dark:text-text_secondary_dark cursor-pointer text-base flex items-center justify-center rounded-md"
            >
                {darkMode ? <Sun /> : <Moon />}
            </button>
        </div>
    )
}

export default DarkMode