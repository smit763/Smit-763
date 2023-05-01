import React,{  useState } from 'react';
import uuid from 'react-uuid';
import Notelist from './Notelist';

export default function Notes() {
    const [Input, setInput] = useState(true);
    const [notes, setnotes] = useState(false);
    const [notelist, setnotelist] = useState([]);
    const [title, settitle] = useState("");
    const [text, settext] = useState("");
    const id = uuid();
    const handleInputClick = ()=>{
        setInput(false)
        setnotes(true)
    }
    const handleSubmitClick = ()=>{
        setInput(true)
        setnotes(false)
        setnotelist((olddata)=>[...olddata,{title,text,id}])
        settitle("")
        settext("")
    }
    const handleTitleInput = (e)=>{
        settitle(e.target.value)
    }
    const handleTextChange = (e)=>{
        settext(e.target.value)
    }
    const handledelete = (num)=>{
        const newlist = notelist.filter(e=>e.id !== num)
        setnotelist(newlist)
    }
    return (
        <>
            <div className='mx-[200px] my-[50px]'>
                <div className='flex justify-center'>
                    <h1 className='text-[30px]'>Enter Your Notes Here</h1>
                </div>
                <div className='my-[100px]'>
                    <div className='flex flex-col items-center gap-[10px]'>
                        {Input&&<div 
                            className='text-[20px] p-[10px] text-black w-[500px] h-[75px] shadow-md shadow-white bg-white rounded-lg cursor-pointer'
                            onClick={handleInputClick}
                        >Enter Your Note Here</div>}
                        {notes&&<form className="relative flex flex-col items-center shadow-md shadow-white">
                            <input 
                                type="text" 
                                className="text-black text-[20px] p-[10px] placeholder-black rounded-t-lg w-[500px] focus:outline-none border-b-[2px] border-black"
                                placeholder='Enter Your Title Here'
                                value={title}
                                onChange={handleTitleInput}
                                required={true}
                            />
                            <textarea 
                                rows="8"
                                className='text-black text-[20px] w-[500px] p-[10px] rounded-b-lg focus:outline-none'
                                placeholder='Enter Your Text Here'
                                value={text}
                                onChange={handleTextChange}
                                required={true}
                            ></textarea>
                            <button 
                                className='absolute rounded-full p-[10px] border-[2px] border-black bg-black bottom-[5px] right-[5px] text-[20px] duration-[0.5s] hover:bg-green-600 hover:duration-[0.5s] '
                                onClick={handleSubmitClick}
                            >Add</button>
                        </form>}
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-[10px]'>
                    {notelist.map((note,i) => {
                        return (<Notelist title={note.title} text={note.text} num={note.id} ondelete={handledelete} key={i} />)
                    })}                            
                </div>
            </div>
        </>
    )
}
