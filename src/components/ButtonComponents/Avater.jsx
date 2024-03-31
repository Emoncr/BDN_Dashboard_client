import React from 'react'
import avaterImage from "../../../public/images/Emon.png"


const Avater = () => {
    return (
        <>
            <div
                className="cursor-pointer bg-transparent flex flex-row items-center justify-start gap-2"
                type="button"
            >
                <img
                    src={avaterImage}
                    width={32} height={32}
                    className="rounded-full" alt="Avatar"
                    style={{ aspectRatio: '32 / 32', objectFit: 'cover' }}
                />
                <div>
                    <p className='heading text-base font-bold'>Biplob Hasan Emon</p>
                    <p className='content text-xs font-medium'>Product Enginner</p>
                </div>
            </div>
        </>
    )
}

export default Avater