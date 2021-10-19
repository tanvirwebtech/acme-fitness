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
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    // Sign up With Email and Password
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

    // Sign in with Email and Password
    const signInWithEmail = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, userEmail, userPass)
            .then((result) => {
                setUser(result.user);
            })
            .catch((err) => {
                setErr(err.message);
            })
            .finally(() => setIsLoading(false));
    };

    // Google Sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Log out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    };

    // Observer Function
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
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
        err,
        isLoading,
        setIsLoading,
    };
};

export default useFirebase;
