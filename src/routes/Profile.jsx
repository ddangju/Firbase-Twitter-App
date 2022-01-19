import { signOut } from "firebase/auth";
import { auth } from "myBase";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default Profile;
