import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function User() {
    const {fname} = useParams();
    const Location = useLocation();
    return (
        <>  
            <div className="flex justify-center my-[50px]">
                <h1 className='text-[30px]'>This is Mr/Mrs {fname}'s page</h1>
                <h1>{Location.pathname}</h1>
            </div>
        </>
    )
}