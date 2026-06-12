import { useContext,createContext } from "react";
import meetingData from "../data/meetingData";

const Context=createContext({
    meetings:[meetingData]
})

export default Context