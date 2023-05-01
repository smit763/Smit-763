import React from 'react'
import { LastName, Name } from './Context'
export default function ComC() {
    return (
        <>
        {/* Consumer Allways Accept Function It Will Never Take Componentv Or Any Other Thing. */}
            <Name.Consumer>
                {(name)=>{
                    return (
                        <LastName.Consumer>
                            {(value)=>{
                                return(
                                    <h1 className='text-[20px]'>Name Is {name} {value}</h1>
                                )
                            }}
                        </LastName.Consumer>  
                    )
                }}
            </Name.Consumer>
        </>
    )
}
