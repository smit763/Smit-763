import React from 'react'
import ComA from './ComA'
import { createContext } from 'react'

const Name = createContext();
const LastName = createContext();
export default function Context() {
    return (
        <>
            <Name.Provider value={"Smit"}>
                <LastName.Provider value={"Rakholiya"}>
                    <ComA/>
                </LastName.Provider>
            </Name.Provider>
        </>
    )
}
export {Name };
export{ LastName }