import React from 'react';
import img from "../../images/bitmap-copy-5.jpg";
// import rectangle from "../../images/rectangle.png";

const Activities = () => {
    return (
        <div className="activities bg-light">
            <img src={img} alt="img" className="activities_left" />
            <div className="activities_center" >
                <h2 className="">Upcoming <span className="text-theme">Activities</span></h2>
                <span className="">
                    <h4 >Adventure training camps for students</h4>
                    <p>Starts from June 4th Week Held at Madikeri</p>
                </span>
                <button className="btn shadow btn-theme btn-outline-theme btn-warning text-white  px-5">Know More</button>
            </div>
            <div className="activities_right hide_on_med">
                <p>Haveri</p>
                <p>Davanagere</p>
                <p>Badami</p>
                <p>Hiriyur</p>
                {/* <p className="activities_active">Madikeri</p> */}
                <p>Madikeri</p>
                <p>Ramanagara</p>
                <p>Raichur</p>
                <p>Belgaum</p>
            </div>
        </div>
    );
};

export default Activities;