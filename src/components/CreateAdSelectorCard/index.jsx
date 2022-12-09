import React from "react";
import "./styles.css"



const CreateAdSelector = (props) => {
    // console.log("this is the is",props.dataid);
    const selectSubCat = () => {
        console.log("inside the section this is",props.dataid);
        props.SetSubCat(props.dataid)
    }
    return (
        <div className="createad-selector-div" onClick={selectSubCat}>
            <div className="selector-img-div"> <img className="selector-img" src= {props.imgDefault} alt="" /></div> 
            <div className="selector-name">{props.name}</div> 
        </div>
    );
}

export default CreateAdSelector;