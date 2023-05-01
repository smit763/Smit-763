import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    const [Menu, setMenu] = useState("Menu");
    // const [Class, setClass] = useState("hidden")
    const [num, setnum] = useState(-100)
    const [opa, setopa] = useState(0)
    const [width, setwidth] = useState(window.screen.width)
    const handleMenu = ()=>{
        if (Menu==="Menu") {
            setMenu("Close")
            setopa(1)
            setnum(4)
            // setClass("block")
        } else {
            setMenu("Menu")
            setopa(0)
            setnum(-100)
            // setClass("hidden")
        }
    }
    useEffect(() => {
        const getwidth = ()=>{
            setwidth(window.screen.width)
        }
        getwidth()
    })
    return (
        <>
            {width >= 1280 ? <div className='border-b-[2px] sticky top-0 bg-black z-[2]'>
                <div className='flex justify-between items-center mx-[100px]'>
                    <div>
                        <h1 className='text-[28px]'>LOGO</h1>
                    </div>
                    <nav className="flex  justify-center items-center">
                        <ul className='flex  gap-[10px]'>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/">Home</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/number-increment">Number</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/list">List</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/clock">Clock</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/state">State</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/accordion">Accordion</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/notes">Notes</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/context">Context</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/effect">Effect</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/covid-information">Covid-19</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/pokemon">Pokemon</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/login">Log In</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/admin-panel">Admin</Link></li>
                            <li className='text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/axios">Axios</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>:<div className="bg-black">
                <div className="flex justify-between items-center mx-[50px] bg-black">
                    <div>
                        <h1 className="text-[20px]">Logo</h1>
                    </div>
                    <div>
                        <h1 className="text-[20px]" onClick={handleMenu}>{Menu}</h1>
                    </div>
                </div>
                <div className={`absolute opacity-${opa} h-full duration-[1s] top-[${num}%] w-full bg-black z-10`}>
                    <ul className='flex flex-col items-center gap-[10px] px-[50px]'>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/">Home</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/number-increment">Number</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/list">List</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/clock">Clock</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/state">State</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/accordion">Accordion</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/notes">Notes</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/context">Context</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/effect">Effect</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/covid-information">Covid-19</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/pokemon">Pokemon</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/login">Log In</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/admin-panel">Admin</Link></li>
                        <li className='w-full text-center text-[20px] border-b-[2px] border-black hover:border-b-[2px] hover:border-white'><Link to="/axios">Axios</Link></li>
                    </ul>
                </div>
            </div>}
            <Outlet/>
        </>
    )
}
    