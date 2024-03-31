import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SiteForms/SearchForm'
import Notification from '../ButtonComponents/Notification'
import Avater from '../ButtonComponents/Avater'
import SiteNavber from '../Navbars/SiteNavber'
import DarkMode from '../ButtonComponents/DarkMode'


const Layout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false)




    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[250px_1fr]">
                <div className="hidden border-r bg-bg_primary_white lg:block dark:bg-dark_bg_primary">
                    <div className="flex flex-col gap-2">
                        <div className="flex h-[60px] items-center px-6">
                            <Link to={"/"} className="flex items-center gap-2 font-semibold" >
                                <h1>LOgo</h1>
                            </Link>
                        </div>
                        <aside className="flex-1">
                            <SiteNavber />
                        </aside>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex  items-center justify-center gap-4 bg-bg_primary_white  px-7 py-3  dark:bg-dark_bg_primary">

                        <div className="flex-1">
                            <h2 className="font-semibold text-lg">Welcome</h2>
                        </div>
                        {/*=========== SITE SEARCH FORM ====== */}
                        <SearchForm />
                        <Notification />
                        <DarkMode darkModeInfo={{ darkMode, setDarkMode }} />
                        <Avater />


                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-bg_secondary_darkWhite dark:bg-dark_bg_secondary">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout