import React from "react";
import { useState } from "react";
import MedicineModal from "./MedicineModal";

export default function MedicineCard({ medicine }) {
    const [selectedMedicine, setSelectedMedicine] = useState(null);


    return (
        <div className="bg-white grid grid-rows-4 rounded-2xl shadow-md overflow-hidden w-full max-w-sm hover:shadow-lg transition-all duration-300">
            <div
                className="p-4 row-span-3 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">{medicine.name}</h3>
                <p className="text-sm text-gray-600">Dosage: {medicine.dosage}</p>
                <p className="text-sm text-gray-600">Price: {medicine.price} ج.م</p>
                <p className="text-sm text-gray-600">Stock: {medicine.Stock}</p>
                {medicine.onSale && (
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mt-2">
                        Sale -{medicine.discount}%
                    </span>
                )}
            </div>
            {selectedMedicine && <MedicineModal selectedMedicine={selectedMedicine} onClose={() => setSelectedMedicine(null)} />}
            <div>
                <button
                    onClick={() => setSelectedMedicine(medicine)}
                    className="bg-primary block cursor-pointer text-xs py-2 mx-4  px-8 rounded-full text-white text-center w-max">تعديل
                    </button>
            </div>
        </div>
    );
}
