import React, { useState } from 'react'
import { useNavigate,Outlet, Link } from "react-router-dom"

export default function SignupPage(props) {
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");       

    const navigate = useNavigate();
    const handleSubmit =async (e)=>{
        e.preventDefault()         
        await fetch('http://localhost:6969/api/users', {
            method: 'POST', 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,username,email,password
            })
        }).then((res)=> res.json()).then(RES=>{
            alert("Your Account Was Created Successfully")
            props.data(true)

        }).catch((error)=>{
            alert(error)
        })
        navigate("/login-home")
        setname("")
        setemail("")
        setusername("")
        setpassword("")
    }
    const handleNameChange = (e)=>{
        setname(e.target.value)
    }
    const handleEmailChange = (e)=>{
        setemail(e.target.value)
    }
    const handleUsernameChange = (e)=>{
        setusername(e.target.value)
    }
    const handlePasswordChange = (e)=>{
        setpassword(e.target.value)
    }
    return (
        <>
            <div className='mx-[200px] my-[50px]'>
                <div className="text-[20px]">
                    <form className="flex h-[100%] flex-col items-center justify-center gap-[50px]" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className="p-[10px] text-[25px] w-[500px] text-white border-b-[2px] border-white placeholder-grey focus:outline-none bg-black focus:border-b-white "
                            placeholder='Name'
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                        <input 
                            type="email" 
                            className="p-[10px] text-[25px] w-[500px] text-white border-b-[2px] border-white placeholder-grey focus:outline-none bg-black  "
                            placeholder='Email'
                            value={email}
                            onChange={handleEmailChange}
                            required={true}
                        />
                        <input 
                            type="text" 
                            className="p-[10px] text-[25px] w-[500px] text-white border-b-[2px] border-white placeholder-grey focus:outline-none bg-black  "
                            placeholder='UserName'
                            value={username}
                            onChange={handleUsernameChange}
                            required={true}
                        />
                        <input 
                            type="text" 
                            className="p-[10px] text-[25px] w-[500px] text-white border-b-[2px] border-white placeholder-grey focus:outline-none bg-black  "
                            placeholder='Password'
                            value={password}
                            onChange={handlePasswordChange}
                            required={true}
                            maxLength={8}
                            minLength={4}
                        />
                        <button
                            type='submit'
                            className="p-[10px] border-[2px] text-[25px] hover:bg-white hover:text-black w-[200px] duration-[0.5s] hover:duration-[0.5s] hover:w-[300px]"
                        >Submit</button>
                    </form>
                    <div className="text-[75%] my-[20px]">
                        <h1 className="text-center">If You Have Already Account <Link to="/login-page" className="text-blue-600">Log In</Link> Here</h1>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
