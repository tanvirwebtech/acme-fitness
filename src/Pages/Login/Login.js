import React from "react";
import useFirebase from "../../Firebase/useFirebase";
// onClick = { signInUsingGoogle };
const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    const handleClick = () => {
        console.log("clicked");
    };
    return (
        <div>
            Login
            <button onClick={handleClick}>Login with google</button>
        </div>
    );
};

export default Login;
