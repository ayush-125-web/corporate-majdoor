
import EachTask from "./eachTask";

const TaskDetails=({tasks,setTasks})=>{
    return(
        tasks.map((task)=><EachTask task={task} tasks={tasks} setTasks={setTasks}></EachTask>)
    )
}

            
export default TaskDetails