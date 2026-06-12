import Calender from "./meetingComponents/calender"
import MeetingInfo from "./meetingComponents/meetingInfo"
import { useState} from "react"
import AddMeeting from "./meetingComponents/addMeeting"
import Context from "../store/context"




const Meeting=({meets,setMeets})=>{
    
    const [isPopUp,setPopUp]=useState(false);

    return (
        <>
          <div className="d-flex justify-content-between w-100 mt-5">
            <MeetingInfo setPopUp={setPopUp} meets={meets} setMeets={setMeets}></MeetingInfo>
            {isPopUp && <AddMeeting setPopUp={setPopUp} meets={meets}setMeets={setMeets}></AddMeeting>}
            <Calender meets={meets}></Calender>
          </div>

        </>
    )
}

export default Meeting