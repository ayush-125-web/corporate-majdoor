import Calender from "./meetingComponents/calender"
import MeetingInfo from "./meetingComponents/meetingInfo"
import { useState,useContext} from "react"
import AddMeeting from "./meetingComponents/addMeeting"
import Context from "../store/context"




const Meeting=()=>{
    const{meetings}=useContext(Context);
    const [isPopUp,setPopUp]=useState(false);
    const[meets,setMeets]=useState(meetings);

    console.log(meetings);

    return (
        <>
          <div className="d-flex justify-content-between w-100 mt-5">
            <MeetingInfo setPopUp={setPopUp} meets={meets}></MeetingInfo>
            {isPopUp && <AddMeeting setPopUp={setPopUp} meets={meets}setMeets={setMeets}></AddMeeting>}
            <Calender></Calender>
          </div>

        </>
    )
}

export default Meeting