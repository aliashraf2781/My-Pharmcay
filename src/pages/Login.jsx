import React, { useEffect } from 'react'
import LoginForm from '../components/AuthForm/AuthForm'
import { Link } from 'react-router-dom'
import axiosInstance from '../libs/axios'

export default function Login() {
    useEffect(() => {
        const formData = new FormData();
        formData.append("email", "admin@admin.com");
        formData.append("password", "Ag12345678");

        axiosInstance
            .post('auth/login', formData)
            .then(res => console.log(res.data))
            .catch(err => console.error("Login error:", err.response?.data || err.message));
    }, []);

    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen bg-background">
                <LoginForm>
                    <form className="bg-light p-8 md:rounded-s-3xl md:shadow-md w-96 flex flex-col justify-center">
                        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                        <div className="mb-4">
                            <input type="text" id="username" placeholder='email' className="mt-1 block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-6">
                            <input type="password" id="password" placeholder='password' className="mt-1 block w-full px-3 py-2 border transition-all tra border-primary/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <button type="submit" className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-3xl hover:bg-primary/80 cursor-pointer">Login</button>
                        <div>Don't have an account? <span className='text-primary underline '><Link to={'/register'}> Register now</Link></span></div>
                    </form>
                </LoginForm>
            </div>
        </main>
    )
}
