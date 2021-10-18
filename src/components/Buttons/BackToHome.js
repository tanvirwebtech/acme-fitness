import React from "react";
import { useHistory } from "react-router";
import "./Buttons.css";
const BackToHome = () => {
  const history = useHistory();
  const handleBackToHome = () => {
    history.push("/");
  };
  return (
    <>
      <button className="back-to-home-btn px-4 py-2" onClick={handleBackToHome}>
        Back To Home
      </button>
    </>
  );
};

export default BackToHome;
