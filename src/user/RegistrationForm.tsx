import React, { useState } from 'react';
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserDocument } from '../firebase/useService';
import styles from '../products/ProductPage.module.css'

interface RegistrationFormProps {
    onClose: () => void
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose }) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
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
            let errorMsg = '';
            if (error && typeof error === 'object' && 'message' in error) {
                errorMsg = (error as { message: string }).message;
            } else {
                errorMsg = String(error);
            }
            alert("Error registering: " + errorMsg);
        }
        onClose()
    };

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-zinc-900 p-5 w-150 h-100 shadow-lg relative border flex flex-col justify-center items-center">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 px-2 text-white hover:text-gray-900 hover:bg-zinc-600 hover:rounded-md"
                >
                    X
                </button>
                <form onSubmit={handleRegister} className='flex flex-col justify-center items-center'>

                    <input 
                        value={firstName} 
                        onChange={e => setFirstName(e.target.value)} 
                        placeholder='First Name'/>
                    <input 
                        value={lastName} 
                        onChange={e => setLastName(e.target.value)} 
                        placeholder='Last Name'/>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type='email' placeholder='Email'/>
                    <input 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        type='password' placeholder='New Password'/>

                    <br />
                    
                    <button className={`${styles.addCartBtn}`} type='submit' >Register</button>
                    
                </form>

            </div>
        </div>

    )
}

export default RegistrationForm;