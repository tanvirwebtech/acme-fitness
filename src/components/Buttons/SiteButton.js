import React from "react";
import "./Buttons.css";

const SiteButton = ({ children }) => {
    return (
        <>
            <button className="site-btn px-4 py-2">{children}</button>
        </>
    );
};

export default SiteButton;
