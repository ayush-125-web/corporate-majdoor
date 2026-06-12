import { MdDelete } from "react-icons/md";
import { useState } from "react";

const EachTask=({task,tasks,setTasks})=>{


    const[isMarked,setMark]=useState(false)

    const handleonClickDelete=()=>{
        setTasks((prev)=>prev.filter((t)=>t.id!=task.id))
    }

    const handleonClickMark=()=>{
        setMark(true);
        setTasks((prev)=>prev.map((t)=>t.id==task.id?{...t,isDone:true}:t));
    }

    return (
        <li class="list-group-item d-flex gap-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
                <input class="form-check-input me-1" type="checkbox" checked={isMarked} onClick={handleonClickMark}  value="" id={task.id} style={{cursor:'pointer'}}/>
                <label class="form-check-label" for="firstCheckbox"
                style={{textDecoration: task.isDone ? 'line-through' : 'none', opacity: task.isDone ? 0.5 : 1}}>{task.task}</label>
            </div>
            <MdDelete onClick={handleonClickDelete} size={20} style={{cursor:'pointer'}}></MdDelete>
        </li> 
    )
}

export default EachTask