import styles from '../../style/taskInput.module.css'
import { IoCloseOutline } from "react-icons/io5";
import { useRef } from 'react';

const TaskInput=({tasks,setTasks,setPopUp})=>{
    const descriptionRef=useRef(null);

    const handleonClickAdd=()=>{
        const id=crypto.randomUUID();
        setTasks([...tasks,{id:id,task:descriptionRef.current.value}]);
        descriptionRef.current.value='';
    }
    return (
        <div className={`${styles.popUps} d-flex flex-column gap-4`}>
            <IoCloseOutline size={25} className='d-block ms-auto' onClick={()=>setPopUp(false)} style={{cursor:'pointer'}}
            ></IoCloseOutline>
            <h2>Enter Your Task</h2>
            <textarea
            className="form-control"
            rows="4"
            placeholder="Enter task description..."
            ref={descriptionRef}
            ></textarea>
            <button className="btn btn-primary"
            onClick={handleonClickAdd}
            >ADD</button>
        </div>
    )
}

export default TaskInput