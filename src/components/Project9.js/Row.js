import React from 'react'

export default function Row(props) {
    return (
        <>
            <div className="flex  text-[25px]">
                <div className={`border-r-[2px] p-[10px] w-[100px] border-t-[2px]`}>
                    <h1>{props.num === 0 ? "Total":props.num}</h1>
                </div>
                <div className={`border-r-[2px] p-[10px] w-[160px] border-t-[2px] hover:bg-${props.active < 9833 ?"green":"red"}-500`}>
                    <h1>{props.active}</h1>
                </div>
                <div className={`border-r-[2px] p-[10px] w-[200px] border-t-[2px] hover:bg-${+props.confirm < 871618 ?"green":"red"}-500`}>
                    <h1>{props.confirm}</h1>
                </div>
                <div className={`border-r-[2px] p-[10px] w-[150px] border-t-[2px] hover:bg-${props.death < 11678 ?"green":"red"}-500`}>
                    <h1>{props.death}</h1>
                </div>
                <div className={`border-r-[2px] p-[10px] w-[200px] border-t-[2px] hover:bg-${props.recover < 849763 ?"green":"red"}-500`}>
                    <h1>{props.recover}</h1>
                </div>
                <div className='p-[10px] w-[250px] border-t-[2px]'>
                    <h1>{props.num!==0?props.state:"All State"}</h1>
                </div>
            </div>
        </>
    )
}
