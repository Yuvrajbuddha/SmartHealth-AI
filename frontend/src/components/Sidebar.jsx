import {
  LayoutDashboard,
  Package,
  Bot,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/",
  },
  {
    name: "Inventory",
    icon: <Package size={20} />,
    path: "/inventory",
  },
  {
    name: "AI Assistant",
    icon: <Bot size={20} />,
    path: "/ai-chat",
  },
];

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        SmartHealth AI
      </h1>

      {menu.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg mb-2 transition ${
              isActive
                ? "bg-blue-700"
                : "hover:bg-blue-800"
            }`
          }
        >
          {item.icon}
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;