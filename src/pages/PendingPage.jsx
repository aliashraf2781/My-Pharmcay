import React from 'react'
import { Link } from 'react-router-dom'

export default function PendingPage() {

    return (
        <main>
            <section className='flex flex-col justify-center items-center min-h-screen gap-5'>
                <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-spin'>
                    <path d="M126 63C126 97.7939 97.7939 126 63 126C28.2061 126 0 97.7939 0 63C0 28.2061 28.2061 0 63 0C97.7939 0 126 28.2061 126 63ZM18.586 63C18.586 87.5292 38.4708 107.414 63 107.414C87.5292 107.414 107.414 87.5292 107.414 63C107.414 38.4708 87.5292 18.586 63 18.586C38.4708 18.586 18.586 38.4708 18.586 63Z" fill="#BDD1FF" />
                    <path d="M116.707 63C121.84 63 126.07 58.8175 125.316 53.7411C124.56 48.653 123.182 43.6649 121.204 38.8909C118.038 31.2474 113.398 24.3024 107.548 18.4523C101.698 12.6022 94.7526 7.96164 87.1091 4.79559C82.3351 2.81814 77.347 1.44009 72.2589 0.684087C67.1825 -0.0701659 63 4.1604 63 9.2925C63 14.4246 67.2047 18.4876 72.2249 19.5536C74.8776 20.1168 77.4795 20.9231 79.9969 21.9659C85.3856 24.198 90.2818 27.4695 94.4061 31.5939C98.5305 35.7182 101.802 40.6144 104.034 46.0031C105.077 48.5205 105.883 51.1224 106.446 53.7751C107.512 58.7953 111.575 63 116.707 63Z" fill="#004CFF" />
                </svg>
                <h1 className='text-2xl font-bold'>انتظر حتى  يتم  تفعيل الحساب</h1>
                <h3 className='text-2xl font-extralight text-gray-400'>اذا لم يتم تفعيل الحساب لمده 24 ساعه</h3>
                <h3 className='text-2xl font-bold text-primary underline underline-offset-6'><Link to={'/contact-us'}>تواصل معنا</Link></h3>
            </section>
        </main>
    )
}
