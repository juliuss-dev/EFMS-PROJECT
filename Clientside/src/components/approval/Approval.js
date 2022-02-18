import {useState} from 'react'
import "../reservation/Reservation.css"
import "../approval/Approval.css"
import {Link} from 'react-router-dom'

function Approval() {
    // const [change, setChange] = useState("title")

    // const handleChange = (event) =>{
    //     setChange(event.target.value)
    // }
    // const resetRadioState = () => {
    //     setChange("");
    //   }
    return (
        <div className="main-approval">
                <table>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Approval</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>Approved</button>
                        <button className='Approval-reject'>Reject</button>
                    </td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>Approved</button>
                        <button className='Approval-reject'>Reject</button>
                    </td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>Approved</button>
                        <button className='Approval-reject'>Reject</button>
                    </td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>Approved</button>
                        <button className='Approval-reject'>Reject</button>
                    </td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>Approved</button>
                        <button className='Approval-reject'>Reject</button>
                    </td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>Approved</button>
                        <button className='Approval-reject'>Reject</button>
                    </td>
                </tr>
                </table>
        {/* <form className='main-form-reservation'>
            <div className="left-side-form">
                    <label>Title</label>
                    <input type="radio" value="title" checked={change === "title"} onChange={handleChange} required />

                    <label>Time Duration</label>
                    <input type="radio" value="time" checked={change === "time"} onChange={handleChange} required />

                    <label>Invited person not from UNC</label>
                    <input type="radio" value="invited" checked={change === "invited"} onChange={handleChange} required />

                    

            </div>
            
            <div className="right-side-form">
            <label>Expected number of participants</label>
            <input type="radio" value="participants" checked={change === "participants"} onChange={handleChange} required />

                <label>Name of requesting party</label>
                <input type="radio" value="party" checked={change === "party"} onChange={handleChange} required />

                <label>Office / Institution</label>
                <input type="radio" value="office" checked={change === "office"} onChange={handleChange} required />

                <label>Designation</label>
                <input type="radio" value="designation" checked={change === "designation"} onChange={handleChange} required />

            </div>
                
                <button className='button-form-reset' type="reset" onClick={resetRadioState}>Reset Input </button>
                <Link to = "/imc"><button className="button-form-next">Next</button></Link>
                <Link to = "/venue"><button className="button-form-back">Back</button></Link>
                
        </form> */}
        
    </div>
    )
}

export default Approval
