import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Adgallerycat from "../containers/Adnavbar/Adgallerycat";
import { useParams } from "react-router-dom";
import Adlist from "../containers/AdList/Adlist";
import "./styles.css"
import Signup from "../components/Signup";

function Adlisting() {
    
        const [signupShown, setSignupShown] = useState(false);

        function handleSignup() {
            setSignupShown(!signupShown);
        }

        let { id } = useParams();
        return (
            <div>
                <div className="header-wrap"><Header onSignup={handleSignup} /></div>
                {signupShown && <Signup closeSignup={handleSignup} />}
                <div className="nav-container-above"></div>
                <Adgallerycat params={id} />
                {/* <div className="sample-div-adlist"></div> */}
                <Adlist params={id} />
                
                <Footer footerimage={true} />
            </div>
        );
    }

    export default Adlisting;
