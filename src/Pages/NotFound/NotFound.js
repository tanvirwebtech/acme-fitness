import React from "react";
import BackToHome from "../../components/Buttons/BackToHome";
import notFound from "../../images/404.png";
const NotFound = () => {
    return (
        <div className="text-light">
            <div className="not-found text-center pb-4">
                <img src={notFound} alt="" className="img-fluid w-50" />
            </div>
            <div className="back-to-home">
                <BackToHome></BackToHome>
            </div>
        </div>
    );
};

export default NotFound;
