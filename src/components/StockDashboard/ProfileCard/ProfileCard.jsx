import React from 'react'

export default function ProfileCard() {
    return (
        <section className='container'>
            <div className='p-8 bg-light shadow-xl text-dark flex flex-col items-center border border-dark/20'>
                <div>
                    <h1 className='text-3xl text-dark font-bold mb-6 text-center'>معلوماتي</h1>
                </div>
                <div>
                    <form className="bg-light p-8 w-96 flex flex-col justify-center ">
                        <div className="mb-4">
                            <input type="text" id="username" placeholder='email' className="mt-1 block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-background/40" value="علي اشرف علي" required />
                        </div>
                        <div className="mb-4">
                            <input type="text" id="tel" placeholder='email' className="mt-1 block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-background/40" value="01015780758" required />
                        </div>
                        <div className="mb-4">
                            <input type="email" id="email" placeholder='email' className="mt-1 block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-background/40" value="aly1234@gmail.com" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" id="address" placeholder='password' className="mt-1 block w-full px-3 py-2 border transition-all tra border-primary/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-background/40" value="الدقهلية مصر" required />
                        </div>
                        <button type="submit" className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-3xl hover:bg-primary/80 cursor-pointer">تأكيد</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
