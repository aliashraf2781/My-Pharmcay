import React, { useState } from "react";
import MedicineCard from "../../components/StockDashboard/Medicine/MedicineCard";
import { IoSearch } from "react-icons/io5";
import {
  filterMedicines,
  handleMedicinesSearch,
  sortMedicines,
} from "../../libs/helpers";
import { medicines } from "../../../data/medicines";
import { Toaster } from "react-hot-toast";

const sorts = [
  "الافتراضي",
  "الاسم",
  " السعر من الاقل الى الأعلى",
  "السعر من الأعلى الى الأقل",
  "الكمية فى العلبة",
  "المخزن",
  "الصلاحية",
];
const filters = [
  "الكل",
  "متاح فى المخزن",
  "نفذ من المخزون",
  "كابسولات",
  "أقراص",
];
export default function Medicines() {
  //  filter => (in_stock, onSale, type, Company, box_size)done 👍
  //  sort => (price, name, quantity, Stock, expire) => done 👍
  //  search => (id, name, company) => done 👍
  //  add Medicine  + delete Medicine
  // !don't forget pagination

  // dashboard ---------------->

  const [filteredItems, setFilteredItems] = useState(null);
  const [activeSort, setActiveSort] = useState("الافتراضي");
  const [activeFilter, setActiveFilter] = useState("الكل");

  let displayedItems = filteredItems !== null ? filteredItems : medicines;
  displayedItems = filterMedicines(displayedItems, activeFilter);
  displayedItems = sortMedicines(displayedItems, activeSort);
  return (
    <main className="container py-16  ">
      <Toaster position="top-center" reverseOrder={false} />
      <form className="max-w-lg grow mb-9">
        <div className="flex relative">
          {/* <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-100"
          >
            Your Email
          </label>

          <button
            type="button"
            onClick={toggleDropdown}
            className="cursor-pointer shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-white bg-primary-color dark:bg-blue-600 transition-all duration-300 border border-blue-700 dark:border-blue-500 rounded-s-lg hover:bg-blue-700 dark:hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            {activeCategory.nameEn}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="z-20 bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700 rounded-lg shadow w-44 absolute top-12 left-0 border border-blue-200 dark:border-gray-600">
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-100"
                aria-labelledby="dropdown-button"
              >
                {[
                  { name: "الكل", nameEn: "All Categories", id: -1 },
                  ...(categories || []),
                ].map((item) => {
                  if (item !== activeCategory)
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={(e) => {
                            toggleDropdown();
                            handleCategorySelection(e, item);
                            setActiveCategory(item);
                          }}
                          className="inline-flex w-full px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 text-stone-700 dark:text-gray-100 hover:text-blue-900 dark:hover:text-blue-400"
                        >
                          {item.nameEn}
                        </button>
                      </li>
                    );
                })}
              </ul>
            </div>
          )} */}

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              onChange={(e) => {
                e.preventDefault();
                handleMedicinesSearch(
                  e.target.value,
                  setFilteredItems,
                  medicines
                );
              }}
              className="block p-2.5 w-full z-10 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 rounded-e-lg border-s-0 border border-blue-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
              placeholder="ابحث عن دوائك..."
              required
            />
            <button
              type="button"
              className="cursor-pointer absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary-color dark:bg-blue-600 rounded-e-lg border border-blue-700 dark:border-blue-500 hover:bg-blue-700 dark:hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <IoSearch />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-between items-center mb-6 max-w-lg">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-stone-700 ">
            ترتيب حسب :
          </label>
          <select
            title="sort"
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm border-blue-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-700 dark:focus:border-blue-400"
          >
            {sorts.map((sort) => (
              <option value={sort} key={sort}>
                {sort}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6 max-w-lg">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-stone-700 ">
            فرز حسب :
          </label>
          <select
            title="filter"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm border-blue-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-700 dark:focus:border-blue-400"
          >
            {filters.map((filter) => (
              <option value={filter} key={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedItems.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </main>
  );
}
