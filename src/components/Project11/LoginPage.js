import React, { useEffect, useState } from 'react'
import img from '../images/download.jpg'
import { useNavigate,Outlet, Link } from "react-router-dom"

export default function LoginPage(props) {
    const navigate = useNavigate();
    const [value, setvalue] = useState([])
    const [uName, setuName] = useState("")
    const [pass, setpass] = useState("")
    useEffect(() => {
        getData();
    })
    const getData = async()=>{
        const Api = await fetch("http://localhost:6969/api/users")
        let data = await Api.json();
        data = data.data;
        setvalue(data)
    }
    const handleUsername =(e)=>{
        setuName(e.target.value)
    }
    const handlepassword = (e)=>{
        setpass(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const newValue = value.filter((data)=>{
            if (data.username === uName && data.password === pass) {
                return true
            }else{
                return false
            }
        })
        if (newValue.length !== 0) {
            props.data(true)
            alert("You Login Successfully!")
            navigate("/login-home")
            setuName("")
            setpass("")
        } else {
            props.data(false)
            alert("Username And Password Is Wrong !")
            setuName("")
            setpass("")
        }
    }
    return (
        <>
            <div className="mx-[200px] my-[50px]">
                <div className="flex flex-col justify-center items-center h-[100%]">
                    <div className="h-[300px] w-[300px] rounded-full overflow-hidden my-[50px]">
                        <img src={img} alt="profile pic" className="h-[100%] w-[100%]" />
                    </div>  
                    <form className="flex flex-col gap-[50px] items-center" onSubmit={handleSubmit}>
                        <input 
                            className="p-[10px] text-[25px] border-b-[2px] bg-[black] placeholder-grey w-[500px] focus:outline-none"
                            type="text" 
                            placeholder='UserName'
                            value={uName}
                            onChange={handleUsername}
                            required={true}
                        />
                        <input 
                            className="p-[10px] text-[25px] border-b-[2px] bg-[black] placeholder-grey w-[500px] focus:outline-none"
                            type="text" 
                            placeholder='Password'
                            value={pass}
                            onChange={handlepassword}
                            maxLength={8}
                            minLength={4}
                            required={true}
                        />
                        <button
                            type='submit'
                            className='p-[10px] text-[25px] w-[300px] border-[2px] duration-[0.5s] hover:duration-[0.5s] hover:bg-white hover:text-black hover:w-[400px]'
                        >Submit</button>
                    </form>
                    <div className='text-left my-[20px]'>
                        <h1 className="text-[15px]">If You Don't Have Account First <Link to="/signup-page" className='text-blue-600'>Create Account</Link> Here</h1>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
