import { MdChangeCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useState } from "react";

const MeetingDetails=({meet,idx,meets,setMeets})=>{
    

    const handleonClickMark=()=>{
        setMeets((prev)=>
            prev.map((m)=>m.id==meet.id ? {...m,isMarked:true}:m)
        )
    }

    const handleonClickDelete=()=>{
        setMeets(()=>{
            return (
              meets.filter((meeting)=>meet.id!=meeting.id)
            )   
        })
    }

    return (
        <>
            <tr>
                <th className='px-4' scope="row" style={{ textDecoration: meet.isMarked ? 'line-through' : 'none', opacity: meet.isMarked ? 0.5 : 1 }}>{idx+1}</th>
                <td className='px-4' style={{ textDecoration: meet.isMarked ? 'line-through' : 'none', opacity: meet.isMarked ? 0.5 : 1 }}>{meet.Date}</td>
                <td className='px-4' style={{ textDecoration: meet.isMarked ? 'line-through' : 'none', opacity: meet.isMarked ? 0.5 : 1 }}>{meet.Time}</td>
                <td className='px-4' style={{ textDecoration: meet.isMarked ? 'line-through' : 'none', opacity: meet.isMarked ? 0.5 : 1 }}>{meet.Description}</td>
                <td onClick={handleonClickDelete}><MdDelete size={25} style={{cursor:'pointer'}}></MdDelete></td>
                <td onClick={handleonClickMark}><IoCheckmarkDoneSharp size={25} style={{cursor:'pointer'}}
                ></IoCheckmarkDoneSharp></td>
            </tr>
        </>
    )
}

export default MeetingDetails