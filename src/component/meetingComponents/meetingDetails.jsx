import { MdChangeCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useState } from "react";

const MeetingDetails=({meet,idx})=>{
    const[isMarked,setMarked]=useState(false);

    const handleonClickMark=()=>{
        setMarked(true);
    }

    return (
        <>
            <tr>
                <th className='px-4' scope="row" style={{ textDecoration: isMarked ? 'line-through' : 'none', opacity: isMarked ? 0.5 : 1 }}>{idx+1}</th>
                <td className='px-4' style={{ textDecoration: isMarked ? 'line-through' : 'none', opacity: isMarked ? 0.5 : 1 }}>{meet.Date}</td>
                <td className='px-4' style={{ textDecoration: isMarked ? 'line-through' : 'none', opacity: isMarked ? 0.5 : 1 }}>{meet.Time}</td>
                <td className='px-4' style={{ textDecoration: isMarked ? 'line-through' : 'none', opacity: isMarked ? 0.5 : 1 }}>{meet.Description}</td>
                <td><MdDelete size={25} style={{cursor:'pointer'}}></MdDelete></td>
                <td onClick={handleonClickMark}><IoCheckmarkDoneSharp size={25} style={{cursor:'pointer'}}
                ></IoCheckmarkDoneSharp></td>
                <td>< MdChangeCircle size={25} style={{cursor:'pointer'}}></MdChangeCircle></td>
            </tr>
        </>
    )
}

export default MeetingDetails