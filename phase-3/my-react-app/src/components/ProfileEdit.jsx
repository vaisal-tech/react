import React from "react";
import "../styles/ProfileEdit.css"

const ProfileEdit=({onClose})=>{
    return(
        <div className="outer-box" onClick={onClose}>
            <div className="modal-box" onClick={(e)=>e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="box">
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Gender</label>
                        <select name="" id="">
                            <option >Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Date of Birth</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Marital Status</label>
                        <select name="" id="">
                            <option>Married</option>
                            <option>UnMarried</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Blood Group</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Nationality</label>
                        <input type="text" />
                    </div>

                </div>
               
                
            </div>
        </div>
        
    )
}

export default ProfileEdit