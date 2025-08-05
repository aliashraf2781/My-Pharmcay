import { ErrorMessage } from "formik";
import React, { useState } from "react";
import ErrorComponent from "../../ErrorComponent";
import toast from "react-hot-toast";
function MedicineDeleteModal({ name, id, onClose }) {
  const [confirmText, setConfirmText] = useState("");
  const [error, setError] = useState("");
  function handleDelete() {
    if (confirmText !== name) {
      setError("الرجاء التأكد من كتابة الاسم بالطريقة الصحيحة");
      return;
    }
    setError("");
    onClose();
    toast.success(` تم حذف ${name}`, { icon: "🗑️" });
  }
  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="flex items-start justify-between">
          <h2
            id="modalTitle"
            className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white"
          >
            حذف <span className="font-bold text-error">{name}</span>!
          </h2>

          <button
            type="button"
            className="-me-4 dark:bg-gray-900  -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          <p className="text-pretty text-gray-700 dark:text-gray-200">
            انت على وشك حذف الدواء{" "}
            <span className="font-bold text-error">{name}</span> نهائيًا من
            النظام. هذه العملية لا يمكن التراجع عنها. تأكد أنك تريد الحذف، واكتب
            اسم الدواء في الخانة أدناه لتأكيد العملية.
          </p>

          <label htmlFor="Confirm" className="mt-4 block">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              من فضلك اكتب "{name}" فى الخانة التالية لتأكيد حذف الدواء
            </span>

            <input
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              type="text"
              id="Confirm"
              className="mt-0.5 w-full rounded border-2 border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
          </label>
          {error && <ErrorComponent message={error} />}
        </div>

        <footer className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={onClose}
          >
            الغاء
          </button>

          <button
            onClick={handleDelete}
            type="button"
            className="rounded bg-error px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            تأكيد الحذف
          </button>
        </footer>
      </div>
    </div>
  );
}

export default MedicineDeleteModal;
