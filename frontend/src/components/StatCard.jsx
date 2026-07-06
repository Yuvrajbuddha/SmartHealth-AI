function StatCard({
  title,
  value,
  change,
  color,
  icon,
  bgColor,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {value}
          </h2>

          <p className={`mt-3 font-semibold ${color}`}>
            {change}
          </p>

        </div>

        <div
          className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;