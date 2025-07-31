import React from 'react'

export default function OrderModal({ order, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl w-full max-w-md p-5 relative">

                <h2 className="text-lg font-semibold text-gray-900 mb-3">تفاصيل الأوردر</h2>
                <p className="text-sm text-gray-700 mb-2">
                    <strong>الصيدلية:</strong> {order.pharmacy}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                    <strong>رقم الأوردر:</strong> {order.id}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                    <strong>الحالة:</strong> {order.status}
                </p>
                <p className="text-sm text-gray-700">
                    <strong>الإجمالي:</strong> {order.total} ج.م
                </p>

                <div className="mt-5 text-left">
                    <button
                        onClick={onClose}
                        className="bg-gray-900 text-white rounded-lg px-4 py-2 text-sm hover:opacity-90"
                    >
                        إغلاق
                    </button>
                </div>
            </div>
        </div>
    );
}
