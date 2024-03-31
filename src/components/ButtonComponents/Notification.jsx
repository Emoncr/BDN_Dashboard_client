import React from 'react'
import { Bell } from 'lucide-react'


const Notification = () => {
    return (
        <div>
            <button
                className="h-10 w-10 bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-900 font-bold text-text_secondary_gray dark:text-text_secondary_dark cursor-pointer text-base flex items-center justify-center rounded-md"
            >
                <Bell />
            </button>
        </div>
    )
}

export default Notification