import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Axios() {
    const [num, setnum] = useState(1)
    const [Name, setName] = useState("")
    const [Moves, setMoves] = useState()
    useEffect(() => {
        getApiData();
    })
    const getApiData = async()=>{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        setName(res.data.name)
        setMoves(res.data.moves.length)
    }
    const handleNumber = (e)=>{
        if (e.target.value > 0 && e.target.value <= 1281) {
            setnum(e.target.value)
        } else {
            alert("You Entered Wrong Number!")
        }
    }
    return (
        <>
            <div className="mx-[200px] my-[50px]">
                <div className="flex justify-center">
                    <select 
                        value={num}  
                        className='bg-black text-white border-[2px] border-white text-[20px] py-[5px] px-[10px] focus:outline-none'
                        onChange={handleNumber}
                    >       
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    {/* <form className="flex gap-[5px]">
                        <input 
                            type="number"
                            className="p-[10px] bg-black text-white border-b-[2px] text-[20px] focus:outline-none"
                            placeholder='Enter The Nuber Here'
                            value={num} 
                            onChange={handleNumber}
                        />
                        <button 
                            type='submit'
                            className="p-[10px] text-[20px] border-[2px] duration-[0.5s] hover:bg-white hover:text-black"
                        >Submit</button>
                    </form> */}
                </div>
                <div className="flex justify-center my-[50px]">
                    <h1 className="text-[20px]">This Is The <span className="underline">{Name}</span></h1>
                </div>
                <div className="flex justify-center my-[50px]">
                    <h1 className="text-[20px]">This Pokemon Have <span className="underline">{Moves} Moves</span></h1>
                </div>
            </div>
        </>
    )
}
