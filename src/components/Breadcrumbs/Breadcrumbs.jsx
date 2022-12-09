import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Breadcrumbs = (props) => {
    const navigate=useNavigate();
    const changeRoute = () => {
        navigate(`/`);
        window.location.reload(false);

    }

    console.log("this is in the breadcrimbs that the spot", props.category);
    return (
        <div className="breadcrumb-container" >
            <ul className="breadcrumbs">
                <li className="breadcrumbs-items" onClick={changeRoute}>
                    Home
                </li>
                {props.category ? <li className="breadcrumbs-items">
                    {props.category}
                </li> : <li className="breadcrumbs-items">All</li> }
            </ul>
            <div className="breadcrumb-details">
            {props.category}
            </div>
        </div>);
}

export default Breadcrumbs;