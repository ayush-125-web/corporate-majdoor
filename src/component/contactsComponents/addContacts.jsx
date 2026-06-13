import { useRef } from "react";
import styles from '../../style/addContacts.module.css'
import { IoCloseOutline } from "react-icons/io5";


const AddContacts=({conts,setContacts,setPopUp})=>{
    const NameRef=useRef(null),NumRef=useRef(null),MailRef=useRef(null);
    const handalOnSubmit=()=>{
        const name=NameRef.current.value,num=NumRef.current.value,mail=MailRef.current.value,id=crypto.randomUUID();
        NameRef.current.value='',NumRef.current.value='',MailRef.current.value='';
        setContacts([...conts,{id:id,name:name,number:num,mail:mail}]);
    }

    return (
        <>
            <form className={styles.popUp} onSubmit={(e)=>e.preventDefault()}>
                <fieldset>
                    <IoCloseOutline size={30} className='d-block ms-auto' onClick={()=>setPopUp(false)} style={{cursor:'pointer'}}
                    ></IoCloseOutline>
                    <legend>ADD NEW CONTACT</legend>
                    <div className="mb-3">
                        <label for="disabledTextInput" className="form-label">Enter Name</label>
                        <input type="text" ref={NameRef} className="form-control" placeholder="Enter Name"/>
                    </div>
                    <div className="mb-3">
                        <label for="disabledSelect" className="form-label">Enter Contact No.</label>
                        <input type="tel" 
                            placeholder="Enter phone number"
                            pattern="[0-9]{10}"
                            onKeyPress={(e) => {
                                if(!/[0-9]/.test(e.key)) e.preventDefault()
                            }} ref={NumRef} className="form-control" placeholder="Enter Time"/>    
                    </div>
                    <div className="mb-3">
                        <label for="disabledSelect" className="form-label">Enter Contact's Mail Id </label>
                        <input type="text" ref={MailRef} className="form-control" placeholder="Enter Mail Id"/>          
                    </div>
                    <button className="btn btn-primary w-100" 
                    onClick={handalOnSubmit}
                    >ADD</button>
                </fieldset>
            </form>
        </>
    )
}

export default AddContacts