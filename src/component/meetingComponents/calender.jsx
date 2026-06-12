import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from '../../style/Calender.module.css'

const Calender=()=>{
    return (
        <>
         <Calendar className={styles.container}></Calendar>
        </>
    )
}

export default Calender
