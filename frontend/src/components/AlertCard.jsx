import {
  AlertTriangle,
  PackageMinus,
  CalendarClock,
} from "lucide-react";

function AlertCard() {
  const alerts = [
    {
      id: 1,
      title: "Critical Stock",
      medicine: "Insulin",
      message: "Only 20 units remaining.",
      color: "bg-red-100",
      border: "border-red-500",
      icon: <AlertTriangle className="text-red-600" size={28} />,
    },
    {
      id: 2,
      title: "Low Stock",
      medicine: "Saline",
      message: "Reorder within 3 days.",
      color: "bg-yellow-100",
      border: "border-yellow-500",
      icon: <PackageMinus className="text-yellow-600" size={28} />,
    },
    {
      id: 3,
      title: "Expiry Alert",
      medicine: "Vitamin D",
      message: "Expires in 15 days.",
      color: "bg-blue-100",
      border: "border-blue-500",
      icon: <CalendarClock className="text-blue-600" size={28} />,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        🚨 Smart Alerts
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`${alert.color} ${alert.border} border-l-4 rounded-xl p-5`}
          >
            <div className="flex items-center gap-3 mb-3">
              {alert.icon}
              <h3 className="font-bold text-lg">
                {alert.title}
              </h3>
            </div>

            <p className="font-semibold">
              {alert.medicine}
            </p>

            <p className="text-gray-700 mt-2">
              {alert.message}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default AlertCard;