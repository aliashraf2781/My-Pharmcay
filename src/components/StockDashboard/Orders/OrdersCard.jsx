import React, { useState } from "react";
import OrderModal from "./OrdersModal";

export default function OrdersList() {
    const [selectedOrder, setSelectedOrder] = useState(null);
        //  search => (id, pharmacy)
        //  navTabs =>  (status)
        //  sort => (status , date, name, total)
        // modal => edit status + print invoices for confirmed orders
        
    const orders = [
        { id: "ORD-10021", pharmacy: "صيدلية النهضة", total: 6120.5, status: "قيد المراجعة" },
        { id: "ORD-10022", pharmacy: "صيدلية الشروق", total: 980, status: "تم التأكيد" },
    ];

    return (
        <div dir="rtl" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
                <div
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className="cursor-pointer rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md transition"
                >
                    <h3 className="text-base font-semibold text-gray-900">{order.pharmacy}</h3>
                    <p className="text-sm text-gray-500 mt-1">{order.id}</p>
                    <p className="text-sm text-gray-700 mt-2">الإجمالي: {order.total} ج.م</p>
                    <span className="mt-2 inline-block text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded">
                        {order.status}
                    </span>
                </div>
            ))}
            {selectedOrder && <OrderModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
        </div>
    );
}

