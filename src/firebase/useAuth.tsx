import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "./firebaseConfig";
import { doc, getDoc } from 'firebase/firestore' 
import { db } from './firebaseConfig'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";


interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    role: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);
      
      if (user) {
        const docRef = doc(db, 'self', user.uid);
        const docSnap =  await getDoc(docRef);
        if (docSnap.exists()) {
          setRole(docSnap.data().role || null)
        } else {
          setRole(null)
        }
      }
    });
      
    return unsubscribe;
  }, []);


  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err:any) {
      setError(err.message)
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
    } catch (err: any) {
      console.error("Logout error:", err.message);
    }
  }

  return (
    <AuthContext.Provider value={{ currentUser, role, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};