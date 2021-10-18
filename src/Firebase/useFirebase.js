import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";

import { useEffect, useState } from "react";
import InitializeAuth from "./init.firebase";

InitializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [name, setName] = useState("");

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const signUpWithEmail = () => {
        createUserWithEmailAndPassword(auth, userEmail, userPass).then(
            (result) => {
                setUser(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {});
            }
        );
    };

    const signInWithEmail = () => {
        signInWithEmailAndPassword(auth, userEmail, userPass).then((result) => {
            setUser(result.user);
            console.log(result.user);
        });
    };

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
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

    return {
        user,
        signInUsingGoogle,
        setUserEmail,
        setUserPass,
        signInWithEmail,
        logOut,
        userEmail,
        userPass,
        setName,
        signUpWithEmail,
    };
};

export default useFirebase;
