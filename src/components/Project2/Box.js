import React from 'react'

export default function Box(props) {
    return (
        <>
            <div className='my-[50px] text-center text-[20px] border-b-[2px]'>
                <h1>{props.text}</h1>
            </div>
        </>
    )
}
