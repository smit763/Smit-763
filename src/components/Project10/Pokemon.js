import React, { useEffect, useState } from 'react'

export default function Pokemon() {
    const [value, setvalue] = useState([]);
    useEffect(() => {
        getPokemon()
    }, [])
    const getPokemon = async ()=>{
        const Api = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281")
        const json = await Api.json();
        setvalue(json.results)
    }
    return (
        <>
            <div className="mx-[200px] my-[50px] flex justify-center ">
                <ol className="text-[25px]">
                    {value.map((data,i)=>{
                        return(<li key={i}>{i}. {data.name}</li>)
                    })}
                </ol>
            </div>
        </>
    )
}
