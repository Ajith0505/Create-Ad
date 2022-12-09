import React from "react";
import "./styles.css";
import { handleCreateAdModal } from "../../redux/reducers/users";
import { useDispatch } from "react-redux";

const BackDrop = () => {
  const dispatch = useDispatch()
  const closeCreateDrawer = () => {
    dispatch(handleCreateAdModal(false))
  }
  return <div className="backdrop-createead" onClick={closeCreateDrawer}></div>;
};

export default BackDrop;
