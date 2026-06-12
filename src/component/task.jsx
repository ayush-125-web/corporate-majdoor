import TaskDetails from "./taskComponent/taskDetails"
import { useState } from "react"
import TaskInput from "./taskComponent/taskInput"

const Task=({tasks,setTasks})=>{

    const[isPopUp,setPopUp]=useState(false)

    return (
        <div className="d-flex flex-column mt-5" style={{width:'40vw'}}>
            <div className="d-flex justify-content-between align-items-center">
                <h2>Plan Your Day</h2>
                {tasks.length!=0 && <button
                style={{
                    width:'20vw',border:'none',backgroundColor:'greenyellow',height:'6vh',
                    borderRadius:'10px',color:'white',fontWeight:'bolder'
                }}
                onClick={()=>setPopUp(true)}>ADD MORE</button>}
            </div>
            
            <hr/>
            {isPopUp && <TaskInput tasks={tasks} setTasks={setTasks} setPopUp={setPopUp}></TaskInput>}
            {tasks.length==0 ? 
                <div className="d-flex flex-column">
                <p>You have no pending tasks.</p>
                <button style={{
                    width:'20vw',border:'none',backgroundColor:'greenyellow',height:'6vh',
                    borderRadius:'10px',color:'white',fontWeight:'bolder'
                    }}
                    onClick={()=>setPopUp(true)}>Add Some</button>
                </div>:
                <ul class="list-group" style={{height:'60vh',overflowY:'auto'}}>
                    <TaskDetails tasks={tasks} setTasks={setTasks}></TaskDetails>
                </ul>
            }
            
        </div>     
     )
}

export default Task