import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // ✅ loading state

    useEffect(() => {
        const stored = localStorage.getItem("userData");
        if (stored) setUser(JSON.parse(stored));
        setLoading(false); // ✅ done loading

    }, []);

    const register = (userData) => {
        const data = { user: userData, isLogin: false };
        localStorage.setItem("userData", JSON.stringify(data));
        return { success: true };
    };

    const login = (user) => {
        const stored = JSON.parse(localStorage.getItem("userData"));

        if (
            stored?.user.email === user.email &&
            stored?.user.password === user.password
        ) {
            const updated = { ...stored, isLogin: true };
            localStorage.setItem("userData", JSON.stringify(updated));
            setUser(updated);
            return { success: true };
        }

        return { success: false };
    };

    const logout = () => {
        localStorage.removeItem("userData");
        setUser(null);
        return { success: true }
    };

    return (
        <AuthContext.Provider value={{ user, loading, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
