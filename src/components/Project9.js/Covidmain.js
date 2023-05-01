import React from 'react'
import { useEffect } from 'react'
import Table from './Table';
import Row from './Row';
import { useState } from 'react';

export default function Covidmain() {
    const [value, setvalue] = useState([])
    const [menu, setmenu] = useState("Menu")
    const [menubar, setmenubar] = useState(false)
    const [filtervalue, setfiltervalue] = useState()
    useEffect(() => {
      getCovidData();
    })
    const getCovidData = async()=>{
        const Api = await fetch("https://data.covid19india.org/data.json")
        const data = await Api.json();
        const finaldata = data.statewise;
        if (filtervalue !== "All Value" && filtervalue!== undefined) {
            const [start,end] =  filtervalue.split("-")   
            if (end <= 10000) {
                const mainvalue = finaldata.filter((data)=>data.active >= +start && data.active < +end)
                setvalue(mainvalue)
            } else {
                const mainvalue = finaldata.filter((data)=>data.active > 10000)
                setvalue(mainvalue)
            }
        }else{
            setvalue(finaldata)
        }
    }
    const handleMenu = ()=>{
        if (menubar) {
            setmenu("Menu")
            setmenubar(false)
        } else {
            setmenu("Close")
            setmenubar(true)    
        }
    }
    const onfirstClick = (e)=>{
        if (menubar) {
            setmenu("Menu")
            setmenubar(false)
        } else {
            setmenu("Close")
            setmenubar(true)    
        }
        setfiltervalue(e.target.innerHTML)
    }
    return (
        <>
            <div className="mx-[200px]">
                <div className="relative flex flex-col items-center justify-center my-[50px]">
                    <div className=" text-center text-[30px] mb-[50px] px-[10px] border-b-[2px]">
                        <h1>Heading Of Covid India</h1>
                        <ul className='absolute top-0 right-[-50px]'>
                            <div className="cursor-pointer border-b-[2px]" onClick={handleMenu}>
                                <h1>{menu}</h1>
                            </div>
                            {menubar && <><li 
                                className="border-b-[2px] hover:bg-white hover:text-black cursor-pointer"
                                onClick={onfirstClick}
                            >All Value</li  >
                            <li 
                                className="border-b-[2px] hover:bg-white hover:text-black cursor-pointer"
                                onClick={onfirstClick}
                            >0-100</li>
                            <li 
                                className="border-b-[2px] hover:bg-white hover:text-black cursor-pointer"
                                onClick={onfirstClick}
                            >100-1000</li>
                            <li 
                                className="border-b-[2px] hover:bg-white hover:text-black cursor-pointer"
                                onClick={onfirstClick}
                            >1000-5000</li>
                            <li 
                                className="border-b-[2px] hover:bg-white hover:text-black cursor-pointer"
                                onClick={onfirstClick}
                            >5000-10000</li>
                            <li 
                                className="border-b-[2px] hover:bg-white hover:text-black cursor-pointer"
                                onClick={onfirstClick}
                            >10000 more...</li></>}
                        </ul>
                    </div>
                    <div>
                        <Table/>
                        {value.map((data,i) => {
                            return (i!==0 && <Row num={i} active={data.active} confirm={data.confirmed } death={data.deaths} recover={data.recovered} state={data.state} key={i} />  )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
