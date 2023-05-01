import React, { useEffect, useState } from 'react'

export default function Admin() {
    const [value, setvalue] = useState([])
    const [card, setcard] = useState(false)
    const [id, setid] = useState("");
    useEffect(() => {
        getData();
    })
    const getData = async()=>{
        const Api = await fetch("http://localhost:6969/api/users")
        let data = await Api.json();
        data = data.data;
        setvalue(data)
    }
    const handleDelete = (e)=>{
        setcard(true)
        setid(e)
    }
    const handleYes = async()=>{
        await fetch(`http://localhost:6969/api/users/${id._id}`,{
                method:'DELETE'
            })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            setcard(false)
        })
    }
    const handleNo = ()=>{        
        setcard(false)
        
    }
    return (
        <>
            <div className='my-[50px] flex flex-col items-center justify-center'>
                <table className="mb-[50px]">
                    <thead>
                        <tr className="text-[20px]">
                            <th className='p-[10px] w-[200px] border-r-[2px]'>index</th>
                            <th className='p-[10px] w-[200px] border-r-[2px]'>Name</th>
                            <th className='p-[10px] w-[200px] border-r-[2px]'>email</th>
                            <th className='p-[10px] w-[200px] border-r-[2px]'>username</th>
                            <th className='p-[10px] w-[200px] border-r-[2px] '>password</th>
                            <th className="p-[10px] w-[250px] text-center">Editing</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map((data,i)=>{
                            return (
                                <tr className='text-[20px]' key={i}>
                                    <td className="border-t-[2px] text-center p-[5px] w-[200px] border-r-[2px]">{i}</td>
                                    <td className="border-t-[2px] text-center p-[5px] w-[200px] border-r-[2px]">{data.name}</td>
                                    <td className="border-t-[2px] text-center p-[5px] w-[200px] border-r-[2px]">{data.email}</td>
                                    <td className="border-t-[2px] text-center p-[5px] w-[200px] border-r-[2px]">{data.username}</td>
                                    <td className="border-t-[2px] text-center p-[5px] w-[200px] border-r-[2px]">{data.password}</td>
                                    <td className="border-t-[2px] p-[5px] w-[250px] flex justify-center">
                                        <button
                                            className="p-[5px] border-[2px] w-[100px] duration-[0.5s] hover:bg-red-600 hover:border-red-600 hover:w-[200px] hover:duration-[0.5s]"
                                            onClick={()=>handleDelete(data)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {card&&<div className="absolute top-0 z-[51] p-[20px] bg-black border-[2px]">
                    <div className="flex flex-col justify-center items-center p-[20px]">
                        <h1 className="text-[30px]">Hello world</h1>
                        <h1 className="text-[30px]">ok world</h1>
                    </div>
                    <div className="flex justify-between">
                        <button 
                            className="p-[10px] text-[20px] border-[2px] w-[100px] duration-[0.5s] hover:bg-green-600 hover:border-green-600 "
                            onClick={handleYes}
                        >Yes</button>
                        <button 
                            className="p-[10px] text-[20px] border-[2px] w-[100px] duration-[0.5s] hover:bg-red-600 hover:border-red-600"
                            onClick={handleNo}
                        >No</button>
                    </div>
                </div>}
            </div>
        </>
    )
}
