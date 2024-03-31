import React from 'react'
import DonatChart from '../../Charts/DonatChart'

const OverviewCards = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5' >
            <div className='bg-bg_primary_white dark:bg-dark_bg_primary p-4 rounded-15 grid items-center grid-cols-2 shadow-sm'>
                <div>
                    <p className='content font-medium text-sm '>Total User</p>
                    <h4 className='heading mt-1 text-2xl font-bold sm:text-lg '>650</h4>
                </div>
                <div className='flex items-center justify-end'>
                    <DonatChart />
                </div>
            </div>
            <div className='bg-bg_primary_white dark:bg-dark_bg_primary p-4 rounded-15 grid items-center grid-cols-2 shadow-sm'>
                <div>
                    <p className='content font-medium text-sm '>Total User</p>
                    <h4 className='heading mt-1 text-2xl font-bold sm:text-lg '>650</h4>
                </div>
                <div className='flex items-center justify-end'>
                    <DonatChart />
                </div>
            </div>
            <div className='bg-bg_primary_white dark:bg-dark_bg_primary p-4 rounded-15 grid items-center grid-cols-2 shadow-sm'>
                <div>
                    <p className='content font-medium text-sm '>Total User</p>
                    <h4 className='heading mt-1 text-2xl font-bold sm:text-lg '>650</h4>
                </div>
                <div className='flex items-center justify-end'>
                    <DonatChart />
                </div>
            </div>
            <div className='bg-bg_primary_white dark:bg-dark_bg_primary p-4 rounded-15 grid items-center grid-cols-2 shadow-sm'>
                <div>
                    <p className='content font-medium text-sm '>Total User</p>
                    <h4 className='heading mt-1 text-2xl font-bold sm:text-lg '>650</h4>
                </div>
                <div className='flex items-center justify-end'>
                    <DonatChart />
                </div>
            </div>
        </div>
    )
}

export default OverviewCards