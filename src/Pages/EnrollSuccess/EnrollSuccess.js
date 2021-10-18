import React from "react";
import { Container } from "react-bootstrap";
import BackToHome from "../../components/Buttons/BackToHome";
import "./EnrollSuccess.css";

const EnrollSuccess = () => {
  return (
    <>
      <Container>
        <div className="enroll-success text-center">
          <h3 className="success-bg py-5 mx-4 my-5 text-success">
            You Have SuccessFully Enrolled WorkOut Course!!
          </h3>
        </div>
        <div className="back-to-home mt-4">
          <BackToHome></BackToHome>
        </div>
      </Container>
    </>
  );
};

export default EnrollSuccess;
