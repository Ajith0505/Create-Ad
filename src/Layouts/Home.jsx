import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Signup from "../components/Signup";
import Main from "../containers/main";
import BackDrop from "../components/Overlay";
import CreateAdDrawer from "../components/createAdSideDrawer/createAdSideDrawer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleCreateAdModal } from "../redux/reducers/users";

function Home() {
  const dispatch = useDispatch()
    const [signupShown, setSignupShown] = useState(false);
    const  isCreateDrawerOpen= useSelector(
      (state) => state.reducers.createAd.isCreateDrawerOpen
  );
    function handleSignup() {
      setSignupShown(!signupShown);
    }

  console.log("this i sthe createad drawer",isCreateDrawerOpen);
  return(
  <div>
    <div className="header-wrap"><Header onSignup={handleSignup} /></div>
    {signupShown && <Signup closeSignup={handleSignup} />}
    {isCreateDrawerOpen?<CreateAdDrawer show={isCreateDrawerOpen}/>:null}
    {isCreateDrawerOpen?<BackDrop />:null}
    <Main />
    <Footer />
  </div>
  );

}

export default Home;
