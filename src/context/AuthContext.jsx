import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, Gprovider } from "../firebase/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar si el usuario ya está logueado
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Login con Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, Gprovider);
      console.log("Usuario logueado:", result.user);
      return result.user;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  // Cerrar sesión
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Para proteger rutas
export const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Verificando sesión...</div>;
  if (!user) return <div>No estás autorizado</div>;

  return children;
};

export default AuthContext;
