import React, { useState } from 'react';
import img from "../../images/bitmap-copy-5.jpg";

const Activities = () => {
    const [active, setActive] = useState("Haveri");
    const [title, setTitle] = useState("Adventure training camps for students");
    const links = ["Haveri", "Davanagere", "Badami", "Hiriyur", "Madikeri", "Ramanagara", "Raichur", "Belgaum"];
    const headings = ["Adventure training camps for students",
        "Awesome Training Session",
        "Badami Awesome Training Session",
        "Hiriyur Awesome Training Session",
        "Madikeri Awesome Training Session",
        "Ramanagara Awesome Training Session",
        "Raichur Awesome Training Session",
        "Belgaum Awesome Training Session"
    ];
    
    const showLinks = () => {
        return links.map((el, i) => <p onClick={() => {
            setActive(el);
            setTitle(headings[i]);
        }} className={`${el === active ? "activities_active" : ""}`} key={i}>{el}</p>)
    }

    return (
        <div className="activities bg-light">
            <img src={img} alt="img" className="activities_left" />
            <div className="activities_center" >
                <h2 className="">Upcoming <span className="text-theme">Activities</span></h2>
                <span className="">
                    <h4 >{title}</h4>
                    <p>Starts from June 4th Week Held at Madikeri</p>
                </span>
                <button className="btn shadow btn-theme btn-outline-theme btn-warning text-white  px-5">Know More</button>
            </div>
            <div className="activities_right hide_on_med">
                {showLinks()}
            </div>
        </div>
    );
};

export default Activities;