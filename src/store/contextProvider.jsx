import {useState} from "react";
import Context from "./context";
import meetingData from "../data/meetingData";


const ContextProvider=({children})=>{
    const [meetings,setMeetings]=useState(meetingData);
    return(
        <>
         <Context.Provider value={{
            meetings,
         }}>
            {children}
         </Context.Provider>
        </>

    )

}

export default ContextProvider