import React from 'react'
import {useState} from 'react'
export default function State() {
    // use state hooks  
    const [value, setvalue] = useState("Hello World")
    const handlState = ()=>{
        value==="Hello World"?setvalue("smit rakholiya"):setvalue("Hello World")        
    }
    return (
        <>  
            {/* use state hook */}
            <div className="mx-[200px] text-[25px] flex gap-[10px] justify-center">
                <h1>{value}</h1>
                <button onClick={handlState}>Click Here</button>
            </div>
            {/* use effect hook */}

        </>
    )
}
