import React from 'react'

const Card = ({ label, value }) => {
    return (
        <div className='flex flex-col p-5 justify-center items-center bg-gray-100 rounded-lg'>
            <span className='text-lg'>{value}</span>
            <span>{label}</span>
        </div>
    )
}

export default Card