import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";


interface AuthContextType {
    currentUser: any;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};