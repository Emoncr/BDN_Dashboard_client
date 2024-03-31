import React from 'react'

const SearchForm = () => {
    return (
        <>
            <form className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400">
                        <circle cx={11} cy={11} r={8} />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input className="flex h-10 w-full rounded-md border-2  px-3 py-2 text-sm placeholder:text-gray-400 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-bg_secondary_darkWhite dark:bg-dark_bg_secondary border-bg_secondary_darkWhite dark:border-dark_bg_secondary text-gray-800 dark:text-gray-200" placeholder="Search..." type="search" />
                </div>
            </form>
        </>
    )
}

export default SearchForm