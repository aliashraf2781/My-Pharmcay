import React from 'react'
import Slogan from '../Slogan/Slogan';

export default function LoginForm({ children }) {
    return (
        <section>
            <div className="flex items-stretch justify-center min-h-[70vh]">
                {children}
                <div className='flex flex-col items-center justify-center w-96 bg-primary p-8 rounded-e-3xl shadow-md'>
                    <Slogan  width='200px'/>
                </div>
            </div>
        </section>
    )
}
