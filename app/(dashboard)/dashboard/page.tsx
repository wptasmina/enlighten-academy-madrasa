import Dashboard from "@/components/dashboard/Dashboard";

const DashboardHome = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <span className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">
          🎯
        </span>
        Welcome to the <span className="text-blue-500">Dashboard!</span>
      </h2>
      <Dashboard />
    </div>
  );
};

export default DashboardHome;
