import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2"
          />
        </div>

        <Bell className="text-gray-700 cursor-pointer" />

        <UserCircle
          size={36}
          className="text-blue-700 cursor-pointer"
        />

      </div>
    </div>
  );
}

export default Navbar;