import React from 'react'

export default function Notelist(props) {
    const handleDel = ()=>{
        window.confirm("You Really Want To Delete This Note")&&props.ondelete(props.num)
    }
    return (
        <>
            <div className="relative flex flex-col p-[10px] h-[250px] w-[300px] bg-white text-black text-[20px]">
                <h1>{props.title}</h1>
                <div>
                    {props.text}
                </div>
                <div 
                    className='absolute bottom-[5px] right-[5px] rounded-md p-[5px] bg-black text-white duration-[0.5s] hover:duartion-[0.5s] hover:bg-red-600 cursor-pointer'
                    onClick={handleDel}
                >
                    Delete
                </div>
            </div>
        </>
    )
}



