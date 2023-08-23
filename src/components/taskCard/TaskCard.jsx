const TaskCard = ({ title, description, createAt }) => {
    return (
        <div
            className="flex flex-col gap-2 justify-evenly border border-dashed rounded-md cursor-pointer border-slate-400 h-52 p-5 w-52 hover:bg-slate-800" >
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{new Date(createAt).toLocaleDateString()}</span>
        </div>
    )
}

export default TaskCard