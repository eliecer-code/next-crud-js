import TaskCard from "@/components/taskCard/TaskCard";
import { prisma } from '@/libs/prisma'

const loadTasks = async () => {
  return await prisma.tasks.findMany();
}

const HomePage = async () => {
  const tasks = await loadTasks()
  return (
    <div>
      <div className="flex flex-wrap  justify-center gap-5 p-10">
        {
          tasks.map(({ id, title, description, createAt }) => (
            <TaskCard
              key={id}
              id={id}
              title={title}
              description={description}
              createAt={createAt}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage