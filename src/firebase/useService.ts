import { db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

import type { User } from 'firebase/auth';
export async function createUserDocument(user: User, extraData = {}) {
    
    const userRef = doc(db, "self", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
        
        const { email, uid } = user;
        const createdAt = new Date();

        await setDoc(userRef, {
            uid,
            email,
            createdAt,
            ...extraData
        })

    }


}