"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const TaskForm = () => {
    const router = useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onChangeText = (event) => {
        const title = event.target.value
        setTitle(title)
    }
    const onChangeDescription = (event) => {
        const description = event.target.value
        setDescription(description)
    }
    const onChangeSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        router.push('/')
        return data
    }
    return (

        <div
            className='w-full h-screen flex justify-center items-center'
        >
            <form
                onSubmit={onChangeSubmit}
                action=""
                className='flex justify-center items-center flex-col rounded-2xl gap-5 w-auto bg-slate-400 h-3/6 p-5'>

                <input
                    type="text"
                    className='rounded-md w-96 h-10 text-cyan-800 pl-1'
                    placeholder='title'
                    value={title}
                    onChange={onChangeText}
                />
                <textarea
                    rows={5}
                    placeholder='Description'
                    type="text"
                    className='rounded-md w-full text-cyan-800 pl-1'
                    value={description}
                    onChange={onChangeDescription}
                />
                <button
                    type='submit'
                    className='w-full bg-green-700 p-5 rounded-xl hover:bg-green-500'
                >
                    SAVE
                </button >
            </form>
        </div >
    )
}

export default TaskForm