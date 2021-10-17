import React from "react";
import useFirebase from "../../Firebase/useFirebase";

const Login = () => {
    const { signInUsingGoogle } = useFirebase();

    return (
        <div>
            Login
            <button onClick={signInUsingGoogle}>Login with google</button>
        </div>
    );
};

export default Login;
