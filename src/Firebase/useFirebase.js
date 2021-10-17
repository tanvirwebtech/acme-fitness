import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { useState } from "react";
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
        signInWithPopup(auth, googleProvider).then((result) => {
            setUser(result.user);
        });
    };

    const logOut = () => {
        signOut(auth).then(() => {});
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({});
        }
    });

    return { user, signInWithEmail, signInUsingGoogle, logOut };
};

export default useFirebase;
