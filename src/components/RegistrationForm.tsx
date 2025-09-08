import React, { useState } from 'react';
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserDocument } from '../firebase/useService';


const RegistrationForm: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await createUserDocument(user, { firstName, lastName });
            alert("User registered successfully!");
        } catch (error) {
            console.error("Error registering:", error);
            alert("Error registering: " + (error?.message || error));
        }
    };

    return (

        <form onSubmit={handleRegister}>
            <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' />
            <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' />
            <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
            <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='New Password' />
            <button type='submit' >Register</button>
        </form>

    )
}

export default RegistrationForm;