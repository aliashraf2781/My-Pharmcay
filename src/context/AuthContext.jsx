import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
const AuthContext = createContext()
export default function AuthProvider({ children }) {
    const [user, setUser] = useState([])
    const [token, setToken] = useState([])

    function login(email, password) {
        axios.post('auth/login', { email, password }).then(res => { setUser(res.data.data); setToken(res.data.data.token) })
    }

    function logout() {
        axios.post('auth/logout')

    }

    function register() {

    }

    useEffect(() => {
        toast.success("loaded successfully")
    }, [user, token])


    return (
        <AuthContext.Provider value={{ user, token, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}

