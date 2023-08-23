"use client"
import Button from "../buttonEdit/Button"
import { useRouter } from 'next/navigation'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const TaskCard = ({ id, title, description, createAt }) => {
    const router = useRouter()
    return (
        <div
            className="relative flex flex-col gap-2 justify-evenly border border-dashed rounded-md cursor-pointer border-slate-400 h-52 p-5 w-52 hover:bg-slate-900" >
            <h3 className="text-yellow-300 font-bold text-lg">{title}</h3>
            <p className="text-slate-400">{description}</p>
            <span className="text-slate-400 font-light text-sm">{new Date(createAt).toLocaleDateString()}</span>
            <div className=" flex gap-2 absolute right-2 bottom-3 ">
                <Button
                    className='bg-green-500 p-1 rounded-md transition-all ease-in duration-150 hover:scale-110'
                    onClick={() => {
                        router.push('/viewTask/edit/' + id)
                    }}
                    icon={<AiFillEdit />}
                />
                <Button
                    className='bg-red-700 p-1 rounded-md transition-all ease-in duration-150 hover:scale-110'
                    onClick={async () => {
                        const res = await fetch(`/api/tasks/${id}`, {
                            method: 'DELETE'
                        })
                        const data = await res.json()

                        console.log(data)
                        router.refresh()
                    }}
                    icon={<AiFillDelete />}
                />
            </div>
        </div>
    )
}

export default TaskCard