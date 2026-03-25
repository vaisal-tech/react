import React from "react";
import "../styles/Profile.css"


const Profile =()=>{

    return(
        <div className="main-profile">
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

export default Profile 