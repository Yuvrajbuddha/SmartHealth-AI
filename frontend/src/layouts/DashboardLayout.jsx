import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-6">

        <Navbar />

        <div className="mt-6">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;