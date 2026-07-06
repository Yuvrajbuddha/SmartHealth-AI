import { inventory } from "../data/dummyData";

function InventoryTable() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-5">
        Medicine Inventory
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-3 text-left">Medicine</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Expiry Date</th>
          </tr>
        </thead>

        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{item.medicine}</td>
              <td className="p-3">{item.stock}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    item.status === "Available"
                      ? "bg-green-500"
                      : item.status === "Low Stock"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3">{item.expiry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;