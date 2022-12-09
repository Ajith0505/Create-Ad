import React from "react";
import "./styles.css"



const Sortfield = (props) => {
    return (
        <div className={(props.sortname === "Sort by") ? "sort-field-ad" : "sort-field"}>
            <div className="sort-content">
                <label className="sort-span">{props.sortname}:</label>
                <select name="cars" id="cars" className="sort-option">
                    <option value="All ads">All ads</option>
                    <option value="Date Published">Date Published</option>
                    <option value="Price(Low - High)">Price(Low - High)</option>
                    <option value="Price(High - low)">Price(High - low)</option>
                </select>
            </div>
        </div>
    )
}


export default Sortfield;