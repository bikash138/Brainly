"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [thoughts, setThoughts] = useState([])

    const getAllThoughts = async () => {
        const response = await axios.get("api/dashboard/getThought")
        setThoughts(response.data.thought)
        console.log(thoughts)
    }

    useEffect( () =>{
        getAllThoughts()
    }, [])

  return (
    <div className='flex gap-x-3'>
       {
        //@ts-ignore
        thoughts.map((t, index)=>(
            <div key={index} className='flec flex-col bg-amber-400 text-black justify-center items-center rounded-md'>
                <p className='text-xl'>{t.title}</p>
                <p className='text-lg'>{t.type}</p>
                <p>{t.url}</p>
            </div>
        ))
       }
    </div>
  )
}

export default page