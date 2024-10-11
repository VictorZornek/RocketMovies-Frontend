import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [data, setData] = useState({})

    async function signIn({ email, password }) {
    
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))    // JSON.stringify transforma um objeto em texto
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)

            } else {
                alert("Não foi possível entrar.")
            }
        }


    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token")
        const user = localStorage.getItem("@rocketnotes:user")

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)    // JSON.parse(user) faz o processo contrário ao stringify, ou seja, transforma uma string em objeto
            })
        }
        
    }, [])

    return (
        <AuthContext.Provider value={{ 
            signIn,
            user: data.user 
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }