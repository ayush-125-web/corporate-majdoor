import { CiStar } from "react-icons/ci";
import { useState } from "react";
import AddContacts from "./contactsComponents/addContacts";
import { AiTwotoneDelete } from "react-icons/ai";
const Contacts=({conts,setContacts,favConts,setFavContacts})=>{
    const[isPopUp,setPopUp]=useState(false)
    const handleonClickDelete=(cont)=>{
        setContacts(conts.filter((c)=>c.id!=cont.id))
    }
    return (
        <>
        <div className="d-flex flex-column gap-4 " style={{marginTop:'8%',width:'40vw'}}>
            <div className="d-flex justify-content-between">
                <h2>Your Contacts</h2>
                <button style={{
                    backgroundColor:'greenyellow',
                    padding:'2%',paddingLeft:'4%',paddingRight:'4%',
                    borderRadius:'8px',fontWeight:'bolder'
                }}
                onClick={()=>setPopUp(true)}>ADD NEW</button>
            {isPopUp && <AddContacts conts={conts} setContacts={setContacts} setPopUp={setPopUp}></AddContacts>}
            </div>
            <hr/>
            {conts.length==0 ? <p>Make Connection</p>:
                <div className="d-flex flex-column" style={{width:'40vw',
                    height:'40vh',
                    overflowY:'auto',
                    borderRadius:'10px',
                    border:'solid',
                    paddingLeft:'1%'
                    }}>
                    
                    <table class="table table-hover gap-5" style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                            <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">NAME</th>
                            <th scope="col">NUMBER</th>
                            <th scope="col">EMAIL ID</th>
                            <th></th>
                            </tr>
                        </thead>
                    <tbody>
                        {conts.map((cont)=>
                        <tr>
                            <th scope="row"><CiStar size={20}></CiStar></th>
                            <td>{cont.name}</td>
                            <td>{cont.number}</td>
                            <td>{cont.mail}</td>
                            <td style={{cursor:'pointer'}}
                            onClick={()=>handleonClickDelete(cont)}><AiTwotoneDelete size={20}></AiTwotoneDelete></td>
                        </tr> )}  
                    </tbody>
                    </table> 
                </div>
            }
        </div>
        </>
    )
}

export default Contacts