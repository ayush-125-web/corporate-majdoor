import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from '../../style/Calender.module.css'
import { GiButtonFinger } from "react-icons/gi";
import '../../style/meetingTile.css'

const Calender=({meets})=>{

    const meetDates=new Set(meets.map((meet)=>meet.Date));

    return (
        <>
         <Calendar tileClassName={({date})=>{
            const dateStr=[date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');
             
            return meetDates.has(dateStr)?'meeting-tile-red':null;

         }} className={styles.container}></Calendar>
        </>
    )
}

export default Calender
