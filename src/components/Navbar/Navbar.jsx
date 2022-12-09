import React from "react";
import "./style.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Countbar from "../Countbar/Countbar";
import Sortfield from "../Sortbyfield/Sortby";


const Navbar = (props) => {

    return (
        <div className="navbar" >
            <Breadcrumbs category={props.category}/>
            {props.countAds?<Countbar />:null}
            <Sortfield sortname={props.sortname}/>
        </div>
    )
}



export default Navbar;