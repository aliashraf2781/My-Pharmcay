import React from 'react'
import InquiryForm from '../components/AuthForm/AuthForm'
import { useNavigate } from 'react-router-dom'
export default function ContactUs() {
    const navigate = useNavigate()
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen bg-background  text-dark">
                <InquiryForm>
                    <form className="bg-light p-8 md:rounded-s-3xl md:shadow-md w-96 flex flex-col justify-center">
                        <h1 className="text-3xl font-bold mb-6 text-center text-dark">تواصل معنا</h1>
                        <div className="mb-4">
                            <input type="text" id="username" placeholder='name' className="mt-1 bg-background block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input type="text" id="email" placeholder='email' className="mt-1 bg-background block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-6">
                            <textarea name="notes" id="notes" placeholder='notes' className="mt-1 bg-background block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-3xl hover:bg-primary/80 cursor-pointer">Login</button>
                        <span onClick={()=> navigate(-1)} className='cursor-pointer text-primary underline underline-offset-6 text-end mt-4'>رجوع</span>
                    </form>
                </InquiryForm>
            </div>
        </main>
    )
}
