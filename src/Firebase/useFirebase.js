import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";
import InitializeAuth from "./init.firebase";
InitializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const signInWithEmail = () => {
        createUserWithEmailAndPassword(auth, userEmail, userPass).then(
            (result) => {
                setUser(result.user);
                console.log(result.user);
            }
        );
    };

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const logOut = () => {
        signOut(auth).then(() => {});
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    return { user, signInUsingGoogle, logOut, signInWithEmail };
};

export default useFirebase;
