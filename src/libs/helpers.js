import { compareAsc } from "date-fns";
export function handleMedicinesSearch(
  searchedWord,
  setterFunction,
  ItemsToSearch
) {
  setterFunction(
    ItemsToSearch.filter(
      (item) =>
        item.id.toLocaleLowerCase().includes(searchedWord.toLowerCase()) ||
        item.name.toLowerCase().includes(searchedWord.toLowerCase())
    )
  );
}
export function sortMedicines(itemToSort, sortBy) {
  if (sortBy === "الافتراضي") {
    return itemToSort;
  }
  const sorted = [...itemToSort];
  switch (sortBy) {
    case "الاسم":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case " السعر من الاقل الى الأعلى":
      return sorted.sort((a, b) => a.price - b.price);
    case "السعر من الأعلى الى الأقل":
      return sorted.sort((a, b) => b.price - a.price);
    case "الكمية فى العلبة":
      return sorted.sort((a, b) => a.quantity - b.quantity);
    case "المخزن":
      return sorted.sort((a, b) => a.stock - b.stock);
    case "الصلاحية":
      return sorted.sort((a, b) => compareAsc(a.expire, b.expire));
    default:
      return itemToSort;
  }
}

export function filterMedicines(itemsToFilter, filterBy) {
  switch (filterBy) {
    case "الكل":
      return itemsToFilter;
    case "متاح فى المخزن":
      return itemsToFilter.filter((item) => item.Stock > 0);
    case "نفذ من المخزون":
      return itemsToFilter.filter((item) => item.Stock === 0);
    case "كابسولات":
      return itemsToFilter.filter((item) => item.typeofMedicine === "capsules");
    case "أقراص":
      return itemsToFilter.filter((item) => item.typeofMedicine === "tablets");
    default:
      return itemsToFilter;
  }
}
