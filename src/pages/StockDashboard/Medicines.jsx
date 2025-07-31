import React from 'react'
import MedicineCard from '../../components/StockDashboard/Medicine/MedicineCard'

export default function Medicines() {
  //  filter => (in_stock, onSale, type, Company, box_size)
  //  sort => (price, name, quantity, Stock, expire)
  //  search => (id, name, company)
  //  add Medicine  + delete Medicine
  // !don't forget pagination

  // dashboard ---------------->
  const medicines= [
    { id: "medicine-10021", name: "Amoxiline", price: 110, quantity: 40, onSale: true, discount: 10, dosage: "500mg", Stock: 100, box_size: 10, typeofMedicine: "capsules", company: "PharmaCo", expire: "2025-12-31" },
    { id: "medicine-10022", name: "Paracetamol", price: 50, quantity: 20, onSale: false, discount: 0, dosage: "500mg", Stock: 200, box_size: 20 },
    { id: "medicine-10023", name: "Ibuprofen", price: 75, quantity: 15, onSale: true, discount: 5, dosage: "400mg", Stock: 150, box_size: 15 },
];


  return (
    <main className='container grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {medicines.map((medicine) => (
        <MedicineCard key={medicine.id} medicine={medicine} />
      ))}
    </main>
  )
}
