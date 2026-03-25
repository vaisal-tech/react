import React from "react";
import UserCard from "../components/UserCard";
import "../styles/Home.css";
import prfImage from "../assets/prf.jpg";

const Home=()=>{

    return(
        <div>
            <div className="img-block">
                <img src={prfImage} alt="" />
                <div className="name-set">
                    <h3>A.S.Vaisal</h3>
                    <h4>Senior Software Engineer</h4>
                </div>
               
            </div>
            
            <UserCard/>
        </div>
    )
}

export default Home