import meetingData from "../../data/meetingData"
import styles from '../../style/meetingInfo.module.css'
import MeetingTable from "./meetingTable"


const MeetingInfo=({setPopUp,meets,setMeets})=>{

    console.log(meets);

    return (
        <>
        <div className="mt-5">
            <div className="d-flex align-items-center gap-5">
                <h3>Scheduled Meetings</h3>
                <button className={styles.addButton} onClick={()=>setPopUp(true)}>ADD MEETINGS</button>
            </div>
           
            <hr/>
            {meets.length==0?<p>You Have No Upcomming Meetings </p>:<MeetingTable meets={meets} setMeets={setMeets}></MeetingTable>}
        </div>
        </>
    )
}

export default MeetingInfo