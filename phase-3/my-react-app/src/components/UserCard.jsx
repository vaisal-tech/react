import { useState } from "react";
import "../styles/UserCard.css"

const UserCard = ()=>{

    return(
        <div className="user-main">
            <div className="user-card">
                <h5>as.vaisal@techversantinfotech.com</h5>
                <h5>+91-6282544695</h5>
                <h5>Trivandrum</h5>
                <h5>TV0913</h5>
            </div>
            <div className="dept">
                <h5>Department</h5>
                <h6>Python</h6>
                
            </div>
            <div className="personal">
                <h3>Primary Details</h3>
                <div className="details">
                    <div>
                        <h5>First Name</h5>
                        <h5>A S</h5>
                    </div>
                    <div>
                        <h5>FLast Name</h5>
                        <h5>Vaisal</h5>
                    </div>
                    <div>
                        <h5>Gender</h5>
                        <h5>Male</h5>
                    </div>
                    <div>
                        <h5>Date of Birth</h5>
                        <h5>11 May 1998</h5>
                    </div>
                    <div>
                        <h5>Marital Status</h5>
                        <h5>Married</h5>
                    </div>
                    <div>
                        <h5>Blood Group</h5>
                        <h5>O+ (O Positive)</h5>
                    </div>
                    <div>
                        <h5>Nationality</h5>
                        <h5>India</h5>
                    </div>
                </div>

            </div>

        </div>
        
        
    )
    

}

export default UserCard