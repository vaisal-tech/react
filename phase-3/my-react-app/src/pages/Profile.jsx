import React,{useState} from "react";
import "../styles/Profile.css"
import ProfileEdit from "../components/ProfileEdit";


const Profile =()=>{

     const [showModal,setShowModal] = useState(false);
     const openModal = ()=> setShowModal(true);
     const closeModal = ()=> setShowModal(false);

    return(
        <div className="main-profile">
            <div className="personal-info">
                <div className="edit">
                    <h3>Primary Details</h3>
                    <a href="" onClick={(e)=>{e.preventDefault(); openModal();}}>Edit</a>
                </div>
                <div className="details">
                    <div>
                        <h5>First Name</h5>
                        <h5>A S</h5>
                    </div>
                    <div>
                        <h5>Last Name</h5>
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

            <div className="contact">
                <div className="edit">
                    <h3>Contact Details</h3>
                    <a href="">Edit</a>
                </div>
                <div className="details">
                    <div>
                        <h5>Work Email </h5>
                        <h5>as.vaisal@techversantinfotech.com</h5>
                    </div>
                    <div>
                        <h5>Personal Email</h5>
                        <h5>-Not Set-</h5>
                    </div>
                    <div>
                        <h5>Mobile Number</h5>
                        <h5>+91-6282544695</h5>
                    </div>
                    <div>
                        <h5>Work Number</h5>
                        <h5>-Not Set-</h5>
                    </div>
                    
                </div>

            </div>
            {showModal && <ProfileEdit onClose={closeModal}/>}
        </div>
    )
}

export default Profile 