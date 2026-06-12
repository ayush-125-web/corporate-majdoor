import { useContext } from "react"
import Context from "../../store/context"
import styles from '../../style/meetingTable.module.css'
import MeetingDetails from "./meetingDetails";

const MeetingTable=({meets,setMeets})=>{
    return (
        <>
            <div style={{height:'60vh', overflowY:'auto',width:'45vw'}}>
                <table class="table table-hover gap-5" style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                        <tr>
                            <th className='px-4' scope="col">S.No.</th>
                            <th className='px-4'scope="col">Date</th>
                            <th className='px-4' scope="col">Time</th>
                            <th className='px-4' scope="col" >Description</th>
                            <th className='px-2' scope="col" ></th>
                            <th className='px-2' scope="col" ></th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {meets.map((meet,idx)=>{
                            return (
                                <>
                                    <MeetingDetails  meet={meet} idx={idx} meets={meets} setMeets={setMeets}></MeetingDetails>

                                </>
                                
                            ) 
                        })}
                    </tbody>
                </table>
            </div> 
        </>
    )
}

export default MeetingTable