import React, { useEffect, useRef, useState } from 'react'

const Home = () => {

    const [count, setCount] = useState(0)

    const [timer, setTimer] = useState()

    const refVar = useRef(0)

    useEffect(() => {
        setTimer(setInterval(() => {
            console.log(Math.floor(Math.random() * 100))
        }, 1000))
    }, [])

    return (
        <>
            <div className='flex p-3 m-5 w-80 justify-between'>
                <h3 className='text-2xl mt-2'>State count: {count}</h3>
                <button
                    className='p-3 bg-slate-200'
                    onClick={() => setCount(count + 1)}
                >useState</button>
            </div>

            <div className='flex p-3 m-5 w-80 justify-between'>
                <h3 className='text-2xl mt-2'>Ref count: {refVar.current}</h3>
                <button
                    className='px-5 py-3 bg-slate-200'
                    onClick={() => {
                        refVar.current = refVar.current + 1
                    }}
                >useRef</button>
            </div>

            <button className='bg-slate-300 p-3 mx-10' onClick={() => clearInterval(timer)}>Stop timer</button>

        </>
    )
}

export default Home