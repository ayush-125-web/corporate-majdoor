import { useContext } from "react"
import Context from "../../store/context"
import styles from '../../style/meetingTable.module.css'
import MeetingDetails from "./meetingDetails";

const MeetingTable=({meets})=>{
    return (
        <>
          <table class="table table-hover gap-5">
                <thead>
                    <tr>
                        <th className='px-4' scope="col">#</th>
                        <th className='px-4'scope="col">Date</th>
                        <th className='px-4' scope="col">Time</th>
                        <th className={`${styles.description} px-4`} scope="col" >Description</th>
                    </tr>
                </thead>
                <tbody>
                    {meets.map((meet,idx)=>{
                        return (
                            <>
                              <MeetingDetails meet={meet} idx={idx}></MeetingDetails>   
                            </>
                            
                        ) 
                    })}
                </tbody>
            </table>
        </>
    )
}

export default MeetingTable