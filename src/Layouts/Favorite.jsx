import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
// import Adgallerycat from "../containers/Adnavbar/Adgallerycat";
import { useParams } from "react-router-dom";
import Favnavbar from "../containers/Favnavbar/Favnavbar";
import "./styles.css"
import FavoriteAdlist from "../containers/FavoriteAds/Favoriteads";



function Favorites() {
    // let { id } = useParams();
    const names = "My Favorites"
    // window.location.reload(false);
    return (
        <div>
            <div className="header-wrap"><Header /></div>
            <div className="nav-container-above"></div>
            <Favnavbar favname={names}/>
            <FavoriteAdlist />
            <Footer footerimage={true} />
            {/* <div className="sample-div"></div> */}
        </div>
    );
}

export default Favorites;