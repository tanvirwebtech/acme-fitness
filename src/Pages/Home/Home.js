import React from "react";
import Login from "../Login/Login";

const Home = () => {
    return (
        <div>
            Home
            <Login></Login>
            <button onClick={() => console.log("click")}> add</button>
        </div>
    );
};

export default Home;
