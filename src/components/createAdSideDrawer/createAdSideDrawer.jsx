import React from "react";
import CreateAdTraverse from "../createAdTraverse";
import CreateAdCatSelector from "../CreateAdCatSelector";
import "./styles.css";


const CreateAdDrawer = (props) => {
    let drawerClasses = props.show ? "side-createad-drawer open" : "side-createad-drawer";
  
    return (
      <div className={drawerClasses}>
        <div className="createad-cover">
        <div className="createad-heading">Create Advertisement</div>
        <CreateAdTraverse />
        <CreateAdCatSelector />
        </div>
      </div>
    );
  };
  
  export default CreateAdDrawer;
  