import React from 'react'

export default function Table() {
    return (
        <>
            <div className="flex  text-[25px]">
                <div className='border-r-[2px] p-[10px] w-[100px]'>
                    <h1>Index</h1>
                </div>
                <div className='border-r-[2px] p-[10px] w-[160px]'>
                    <h1>Active Cases</h1>
                </div>
                <div className='border-r-[2px] p-[10px] w-[200px]'>
                    <h1>Confirm Cases</h1>
                </div>
                <div className='border-r-[2px] p-[10px] w-[150px]'>
                    <h1>Total Death</h1>
                </div>
                <div className='border-r-[2px] p-[10px] w-[200px]'>
                    <h1>Total Recovered</h1>
                </div>
                <div className='p-[10px] w-[250px]'>
                    <h1>State</h1>
                </div>
            </div>
        </>
    )
}
