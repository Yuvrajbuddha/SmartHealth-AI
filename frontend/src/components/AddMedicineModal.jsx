import { useState } from "react";

function AddMedicineModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    medicine: "",
    stock: "",
    status: "Available",
    expiry: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      ...form,
      stock: Number(form.stock),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white p-6 rounded-2xl w-[420px]">

        <h2 className="text-2xl font-bold mb-5">
          Add Medicine
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Medicine Name"
            onChange={(e) =>
              setForm({ ...form, medicine: e.target.value })
            }
          />

          <input
            type="number"
            className="w-full border p-3 rounded-lg"
            placeholder="Stock"
            onChange={(e) =>
              setForm({ ...form, stock: e.target.value })
            }
          />

          <select
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>Available</option>
            <option>Low Stock</option>
            <option>Critical</option>
          </select>

          <input
            type="date"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({ ...form, expiry: e.target.value })
            }
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-200"
            >
              Cancel
            </button>

            <button
              className="px-5 py-2 rounded-lg bg-blue-600 text-white"
            >
              Add
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddMedicineModal;