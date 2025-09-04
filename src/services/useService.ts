import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function createUserDocument(user, extraData = {}) {
    
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