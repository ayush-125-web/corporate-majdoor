import { useContext } from 'react';
import styles from '../../style/addMeeting.module.css'
import { IoCloseOutline } from "react-icons/io5";
import { useRef } from 'react';
// import Draggable from 'react-draggable'

const AddMeeting=({setPopUp,meets,setMeets})=>{
    const DateRef=useRef(null),TimeRef=useRef(null),DescriptionRef=useRef(null);

    
    const handalOnSubmit=()=>{
        const date=DateRef.current.value,time=TimeRef.current.value,description=DescriptionRef.current.value,id=crypto.randomUUID();
        DateRef.current.value='',TimeRef.current.value='',DescriptionRef.current.value='';
        setMeets([...meets,{id:id,Date:date,Time:time,Description:description}]);
    }
    return (
        // <Draggable>
            <form className={styles.popUp} onSubmit={(e)=>e.preventDefault()}>
                <fieldset>
                    <IoCloseOutline size={30} className='d-block ms-auto' onClick={()=>setPopUp(false)} style={{cursor:'pointer'}}
                    ></IoCloseOutline>
                    <legend>ADD DETAILS</legend>
                    <div className="mb-3">
                        <label for="disabledTextInput" className="form-label">Enter Date</label>
                        <input type="date" ref={DateRef} className="form-control" placeholder="Enter Date"/>
                    </div>
                    <div className="mb-3">
                        <label for="disabledSelect" className="form-label">Enter Time</label>
                        <input type="time" ref={TimeRef} className="form-control" placeholder="Enter Time"/>    
                    </div>
                    <div className="mb-3">
                       <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Enter task description..."
                        ref={DescriptionRef}
                       ></textarea>
                    </div>
                    <button className="btn btn-primary"
                    onClick={handalOnSubmit}
                    >Submit</button>
                </fieldset>
            </form>
        // </Draggable>
            
    )
}

export default AddMeeting