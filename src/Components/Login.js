import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.js";
import { db } from "./firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserData(docSnap.data());
            } else {
                setUserData(null);
            }
            setError("");
            setSuccess(true);
        } catch (err) {
            setError(err.message);
            setSuccess(false);
        }
    };

    // Google login handler
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            // Optionally, create user doc in Firestore if not exists
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL,
                });
            }
            setUserData({ email: user.email, name: user.displayName, photoURL: user.photoURL });
            setError("");
            setSuccess(true);
        } catch (err) {
            setError(err.message);
            setSuccess(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full mt-4 bg-white-500 text-black px-4 py-2 rounded-lg hover:bg-gray-500 hover:text-white  transition duration-200 flex items-center justify-center"
                    type="button"
                >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                        <g>
                            <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.18 2.36 30.45 0 24 0 14.82 0 6.73 5.06 2.69 12.44l7.98 6.2C12.18 13.17 17.65 9.5 24 9.5z"/>
                            <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.43-4.74H24v9.01h12.41c-.54 2.91-2.17 5.38-4.62 7.04l7.19 5.6C43.93 37.02 46.1 31.34 46.1 24.55z"/>
                            <path fill="#FBBC05" d="M10.67 28.64c-1.17-3.5-1.17-7.28 0-10.78l-7.98-6.2C.98 15.7 0 19.71 0 24c0 4.29.98 8.3 2.69 12.34l7.98-6.2z"/>
                            <path fill="#EA4335" d="M24 48c6.45 0 12.18-2.13 16.19-5.81l-7.19-5.6c-2.01 1.35-4.58 2.15-7.5 2.15-6.35 0-11.82-3.67-14.33-8.94l-7.98 6.2C6.73 42.94 14.82 48 24 48z"/>
                        </g>
                    </svg>
                    Login with Google
                </button>
                {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
                {success && <p className="text-green-600 text-xs italic mt-4">Successfully logged in!</p>}
                {userData && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">User Data:</h3>
                        <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(userData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}