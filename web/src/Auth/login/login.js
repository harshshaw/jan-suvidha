// App.js
import axios from "axios";
import React, { useEffect, useState } from "react";

import { signInWithGoogle } from "../firebaseConfig";
import { auth } from "../firebaseConfig";

const Login = () => {
    const [email, updateEmail] = useState(null);

    var unsubscribeFromAuth = null;

    const signin = async () => {
        await signInWithGoogle();
        unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            updateEmail(user.email);
            axios
                .post("https://jan-suvidha.herokuapp.com/api/v1/users/admin/login", {
                    email: user.email,
                    department: 'a'
                })
                .then((res) => {
                    return (
                        localStorage.setItem('token', res.data.token),
                        localStorage.setItem('userId', res.data.userId)
                    )
                })
                .catch((error) => console.log(error));
        });
    };

    useEffect(() => { }, [email]);

    return (
        <div className='user-info'>
            {email ? (
                <div>
                    <div>
                        <img src='xyz' />
                    </div>
                    <div>Name:</div>
                    <div>Email:</div>

                    <button
                        onClick={() => {
                            return auth.signOut(), localStorage.clear('auth'), localStorage.clear('userId'), updateEmail(null);
                        }}
                    >
                        LOG OUT
          </button>
                </div>
            ) : (
                    <button onClick={() => signin()}>SIGN IN WITH GOOGLE</button>
                )}
        </div>
    );
};

export default Login;
