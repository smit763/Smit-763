import React from 'react'
import {question} from './Api'
import Items from './Items'
export default function Accordion() {
    return (
        <>
            <div className='mx-[200px] my-[100px]'>
                <div className='flex justify-center my-[50px]'>
                    <h1 className='text-[30px]'>My Accordion List</h1>
                </div>
                <div className='border-[2px] border-black'>
                    {question.map((item,i)=>{
                        return(<Items question={item.question} answer={item.answer} num={item.id} key={i}/>)
                    })}
                </div>
            </div>
        </>
    )
}
