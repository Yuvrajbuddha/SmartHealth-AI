import { Package, Pencil, Trash2, TriangleAlert } from "lucide-react";

function MedicineCard({
  medicine,
  stock,
  status,
  expiry,
  supplier,
  category,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-xl font-bold text-blue-700">
            {medicine}
          </h2>

          <p className="text-gray-500">
            {category}
          </p>
        </div>

        <Package size={36} className="text-blue-600" />

      </div>

      <div className="mt-5 space-y-2">

        <p>
          <strong>Supplier:</strong> {supplier}
        </p>

        <p>
          <strong>Expiry:</strong> {expiry}
        </p>

        <p>
          <strong>Stock:</strong>{" "}
          <span
            className={
              stock < 20
                ? "text-red-600 font-bold"
                : "text-green-600 font-bold"
            }
          >
            {stock}
          </span>
        </p>

        <span
          className={`inline-block mt-2 px-4 py-1 rounded-full text-white ${
            status === "Available"
              ? "bg-green-500"
              : status === "Low Stock"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {status}
        </span>

        {stock < 20 && (
          <div className="flex items-center gap-2 mt-3 bg-red-100 text-red-700 p-2 rounded-lg">
            <TriangleAlert size={18} />
            Low Stock Alert
          </div>
        )}

      </div>

      <div className="flex justify-end gap-3 mt-6">

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition">
          <Pencil size={18} />
        </button>

        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}

export default MedicineCard;