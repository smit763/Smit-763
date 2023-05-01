import React,{  useState } from 'react'

export default function Items(props) {
    const [dataValue, setdataValue] = useState(false)
    const [Text, setText] = useState("Show More...")
    const handleClick = ()=>{
        if (Text === "Show More...") {
            setText("Hide")
            setdataValue(true)
        } else {
            setText("Show More...")
            setdataValue(false)
        }
    }
    return (
        <>
            <div className='my-[10px]'>
                <div className='bg-white text-[25px]  flex justify-between items-center'>
                    <div className='p-[10px]'>
                        <h1 className="text-black">Q{props.num}. {props.question}</h1>
                    </div>
                    <div className='text-black px-[10px] py-[5px]'>
                        <button 
                            className='border-[2px] border-black p-[5px] text-[25px]'
                            onClick={handleClick}
                        >{Text}</button>
                    </div>
                </div>
                {dataValue&&<div className='bg-white text-black p-[15px] border-t-[2px] border-black'>
                    <p className='text-[20px]'><strong>Ans.</strong> {props.answer}</p>
                </div>}
            </div>
        </>
    )
}
