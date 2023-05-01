import React,{ useState,useEffect } from 'react'

export default function Effect() {
    // const [date, setdate] = useState(new Date())
    const [num, setnum] = useState(0)
    const [nums, setnums] = useState(0)
    // const refreshClock = ()=>{
    //     setdate(new Date())
    // }
    // useEffect(() => {
    //     const timerId = setInterval(refreshClock,1000)
    //     return function cleanup (){
    //         clearInterval(timerId)
    //     };
    // },[])
    useEffect(() => {
        
    }, [num])
    
    return (
        <>
            <div className="mx-[200px] my-[200px]">
                <div className='flex justify-center items-center flex-col'>
                    {/* <h1 className="text-[35px]">{date.toLocaleTimeString()}</h1>
                    <h1 className="text-[35px]">{date.toLocaleDateString()}</h1> */}
                    <button
                        className="p-[10px] border-[2px] border-white text-[20px]"
                        onClick={()=>{setnum(num+1)}}
                    >Click Here {num}</button>
                    <button
                        className="p-[10px] border-[2px] border-white text-[20px]"
                        onClick={()=>{setnums(nums+1)}}
                    >Click Here {nums}</button>
                </div>
            </div>        
        </>
    )
}
