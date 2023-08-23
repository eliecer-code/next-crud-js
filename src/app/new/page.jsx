"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/buttonEdit/Button'
import { AiFillSave } from 'react-icons/ai'

const TaskForm = ({ params }) => {

    const router = useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title)
                    setDescription(data.description)
                })
        }
    }, [])

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
        if (params.id) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        } else {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
        }
        router.refresh()
        router.push('/')
    }
    return (

        <div className='w-full min-h-screen flex justify-center items-center p-5'>
            <form
                onSubmit={onChangeSubmit}
                className='w-full sm:max-w-md bg-slate-400 p-5 rounded-2xl'
            >
                <input
                    type='text'
                    className='w-full h-10 text-cyan-800 pl-2 mb-3 rounded-md'
                    placeholder='Title'
                    value={title}
                    onChange={onChangeText}
                    required
                />
                <textarea
                    rows={5}
                    placeholder='Description'
                    className='w-full text-cyan-800 pl-2 mb-3 rounded-md'
                    value={description}
                    onChange={onChangeDescription}
                />
                <Button
                    type='submit'
                    className='flex justify-center items-center w-full bg-green-700 p-3 rounded-xl hover:bg-green-500'
                    icon={<AiFillSave className='text-2xl' />}
                />
            </form>
        </div>
    )
}

export default TaskForm