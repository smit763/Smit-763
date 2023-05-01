import React,{useState} from 'react'

export default function Numbers() {
    const [number, setnumber] = useState(0)
    const handleplus = ()=>{
        setnumber(number+1)
    }
    const handleminius = ()=>{
        number >0?setnumber(number-1):alert("you can't go on less then '0' !")
    }
    // const myFunction = (x,y)=>{
    //     let abc = {};
    //     for (let i = 0; i < x.length; i++) {
    //         abc.x[i] = y[i]
    //     }
    //     return  abc; 
    // }
    // console.log(myFunction([1,2,3],["a","b","c"]))
    return (
        <>                
            <div className='mx-[200px] my-[100px]'>
                <div className='flex flex-col py-[100px] justify-center bg-[white]'>
                    <div className='bg-black text-center rounded-smz'>
                        <h1 className='text-[75px]'>{number}</h1>
                    </div>
                    <div className='flex justify-center my-[50px] bg-black w-[100%]'>
                        <button
                            className='p-[10px] text-[30px] w-[50%] hover:bg-red-500'
                            onClick={handleminius}
                        >-</button>
                        <button 
                            className='p-[10px] text-[30px] w-[50%] hover:bg-green-500'
                            onClick={handleplus}
                        >+</button>
                    </div>
                </div>
            </div>
        </>
    )
}
