import { useState } from "react";
import { Search, Plus } from "lucide-react";

import MedicineCard from "../components/MedicineCard";
import AddMedicineModal from "../components/AddMedicineModal";
import InventoryAI from "../components/InventoryAI";

import { inventory as initialInventory } from "../data/dummyData";

function Inventory() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [medicines, setMedicines] = useState(initialInventory);

  // Search Medicines
  const filteredMedicines = medicines.filter((item) =>
    item.medicine.toLowerCase().includes(search.toLowerCase())
  );

  // Add Medicine
  const addMedicine = (newMedicine) => {
    setMedicines([
      ...medicines,
      {
        id: medicines.length + 1,
        ...newMedicine,
      },
    ]);

    setShowModal(false);
  };

  // Delete Medicine
  const deleteMedicine = (id) => {
    setMedicines(medicines.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Medicine Inventory
          </h1>

          <p className="text-gray-500 mt-2">
            Manage medicines with AI-powered insights.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
        >
          <Plus size={18} />
          Add Medicine
        </button>

      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">

        <Search className="text-gray-500" />

        <input
          type="text"
          placeholder="Search medicines..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* AI Assistant */}
      <InventoryAI inventory={medicines} />

      {/* Medicine Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredMedicines.map((item) => (
          <MedicineCard
            key={item.id}
            medicine={item.medicine}
            category={item.category}
            supplier={item.supplier}
            stock={item.stock}
            status={item.status}
            expiry={item.expiry}
            onDelete={() => deleteMedicine(item.id)}
          />
        ))}

      </div>

      {/* Add Medicine Modal */}
      {showModal && (
        <AddMedicineModal
          onClose={() => setShowModal(false)}
          onAdd={addMedicine}
        />
      )}

    </div>
  );
}

export default Inventory;