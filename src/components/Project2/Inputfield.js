import React,{useState} from 'react'
import Box from './Box'

export default function Inputfield() {
    const [value, setvalue] = useState("")
    const [array, setarray] = useState([])
    const [del, setdel] = useState(false)
    const handlesubmit = (e)=>{
        if (value==="") {
            alert("You can not add empty value")    
        } else {
            setarray((olddata)=>[...olddata,{value}])            
            setvalue("")
            e.preventDefault()
            setdel(true)
        }
    }
    const handlechange = (e)=>{
        setvalue(e.target.value)
    }
    const handleClear = ()=>{
        if(window.confirm("You Really Want To Remove Your All Data")){
            setarray([])
            setdel(false)
        }
    }
    return (
        <div className='mx-[200px] my-[100px]'>
            <div className='flex justify-center'>
                <form
                    onSubmit={handlesubmit} 
                    className='flex gap-[10px]'
                >
                    <input
                        type="text" 
                        placeholder='Enter Your Text Here!'
                        className='p-[10px] text-[20px] text-[black] rounded-md'
                        value={value}
                        onChange={handlechange}
                    />
                    <button
                        className='p-[10px] px-[20px] text-[20px] bg-[grey] hover:bg-green-500 rounded-md'
                        type="submit"
                    >Add</button>
                </form>
            </div>
            {array.map((data,i)=>{
                return(
                    <Box text={data.value} key={i} />
                )
            })}
            {del &&<div className='flex justify-center'>
                <button 
                    className='mt-[20px] text-[20px] p-[10px] border-[2px] border-white hover:bg-white hover:text-black duration-[0.5s] hover:duration-[0.5s] rounded-full'
                    onClick={handleClear}
                >Clear All</button>
            </div>}
        </div>
    )
}
