import React from 'react'

export default function MedicineModal({selectedMedicine, onClose}) {

    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center text-dark justify-center bg-dark/40">
                <div className="rounded-xl bg-light p-5 relative">
                    <div className="absolute top-0 start-0 m-6 p-3 text-primary font-extrabold cursor-pointer text-xl" onClick={onClose}>X</div>
                    <h1 className="text-3xl font-bold mb-6 text-center text-dark">Edit Medicine</h1>
                    <form className="p-8 md:rounded-s-3xl bg-light/40  gap-x-5 min-w-[50vw] grid md:grid-cols-2 mx-auto ">
                        <div className="mb-4">
                            <input value={selectedMedicine.name} type="text" id="product_name" placeholder='Product Name' className="mt-1 block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input value={selectedMedicine.company} type="text" id="product_company" placeholder='Product Company' className="mt-1 block w-full px-3 py-2 border border-primary/30  rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input value={selectedMedicine.dosage} type="text" id="medicine_dosage" placeholder='Active Ingredient' className="mt-1 block w-full px-3 py-2 border transition-all tra border-primary/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input value={selectedMedicine.name} type="text" id="product_type" placeholder='Product Type' className="mt-1 block w-full px-3 py-2 border transition-all tra border-primary/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input value={selectedMedicine.discount} type="text" id="product_type" placeholder='Product Discount' className="mt-1 block w-full px-3 py-2 border transition-all tra border-primary/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input value={selectedMedicine.price} type="text" id="product_price" placeholder='Product price per package' className="mt-1 block w-full px-3 py-2 border transition-all tra border-primary/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-4">
                            <input value={selectedMedicine.quantity} type="text" id="product_price" placeholder='Product Quantity' className="mt-1 block w-full px-3 py-2 border transition-all tra border-primary/30 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                        </div>
                        <div className="mb-6 col-span-2">
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
                        <button type="submit" className="w-full bg-primary col-span-2 text-white font-semibold py-2 px-4 rounded-3xl hover:bg-primary/80 cursor-pointer">Edit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
