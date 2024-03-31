import { LayoutDashboard } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SiteNavber = () => {
    const [active, setActive] = useState(false)
    return (
        <>
            <nav className="grid items-center gap-2  text-sm font-medium py-6 px-4">
                <Link

                    to={"/dashboard"}
                    className={`navLink ${active ?
                        "bg-brand_primary text-white hover:bg-brand_primary/80 dark:text-white"
                        :
                        "text-text_secondary_gray hover:bg-gray-200 hover:text-gray-900"}`}
                >
                    <LayoutDashboard />
                    <span>Dashboard</span>
                </Link>
                <Link

                    to={"/dashboard"}
                    className={`navLink ${active ?
                        "bg-brand_primary text-white hover:bg-brand_primary/80 dark:text-white"
                        :
                        "text-text_secondary_gray hover:bg-gray-200 hover:text-gray-900"}`}
                >
                    <LayoutDashboard />
                    <span>Dashboard</span>
                </Link>
                <Link

                    to={"/dashboard"}
                    className={`navLink ${active ?
                        "bg-brand_primary text-white hover:bg-brand_primary/80 dark:text-white"
                        :
                        "text-text_secondary_gray hover:bg-gray-200 hover:text-gray-900"}`}
                >
                    <LayoutDashboard />
                    <span>Dashboard</span>
                </Link>
            </nav>
        </>
    )
}

export default SiteNavber