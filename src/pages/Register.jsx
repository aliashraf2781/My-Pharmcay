import React from 'react'
import RegisterForm from '../components/AuthForm/AuthForm'

export default function Register() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen bg-background">
                <RegisterForm>
                    <form className="bg-light border border-primary/20 border-e-0 p-8 md:rounded-s-3xl md:shadow-md w-96 flex flex-col justify-center text-dark">
                        <h1 className="text-3xl font-bold mb-6 text-center text-dark">Register Now</h1>
                        <div className="mb-4">
                            <input type="text" id="username" placeholder='name' className="mt-1 bg-background block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input type="text" id="email" placeholder='email' className="mt-1 bg-background block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input type="password" id="password" placeholder='password' className="mt-1 bg-background block w-full px-3 py-2 border transition-all tra border-primary/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="images"
                                className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-primary rounded-xl cursor-pointer bg-light hover:bg-primary/5 transition"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-10 h-10 mb-3 text-primary/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V17a2.5 2.5 0 002.5 2.5h13a2.5 2.5 0 002.5-2.5v-.5M16 8l-4-4m0 0L8 8m4-4v12"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">Click to upload</span>
                                    </p>
                                    <p className="text-xs text-gray-400">PNG, JPG, JPEG (max. 5MB)</p>
                                </div>
                                <input id="images" type="file" multiple accept="image/*" className="hidden" required />
                            </label>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-3xl hover:bg-primary/80 cursor-pointer">Login</button>
                    </form>
                </RegisterForm>
            </div>
        </main>
    )
}
