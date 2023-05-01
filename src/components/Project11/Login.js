import React from 'react'
import img from '../images/download.jpg'
import { Outlet, Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="mx-[200px] my-[50px]">
                <div className="flex flex-col items-center justify-center h-[100%] gap-[50px]">
                    <div className="h-[300px] w-[300px] rounded-full overflow-hidden">
                        <img src={img} alt="profile pic" className="h-full w-full" />
                    </div>
                    <Link to='/login-page' className="p-[10px] text-[30px] border-[2px] w-[400px] duration-[0.5s] hover:text-black hover:bg-white hover:w-[500px] text-center">Log In</Link>
                    <Link to='/signup-page' className="p-[10px] text-[30px] border-[2px] w-[400px] duration-[0.5s] hover:text-black hover:bg-white hover:w-[500px] text-center">Create Account</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}
