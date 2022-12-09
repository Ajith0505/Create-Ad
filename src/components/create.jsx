import React from "react";
import { useDispatch } from "react-redux";
import { handleCreateAdModal } from "../redux/reducers/users";

function Create() {
  const dispatch= useDispatch()
  const handleCreateDrawer = () => {
    dispatch(handleCreateAdModal(true))
  }
  return (
    <button className ="primary-button constant-width" onClick={handleCreateDrawer}><img src="images/plus.svg" className ="plus"/>
       <span className="create-ad">Create Ad</span> </button>
);
}

export default Create;
