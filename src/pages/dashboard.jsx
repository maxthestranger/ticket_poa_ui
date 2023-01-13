import { motion } from "framer-motion";
import AdminLayout from "../layouts/adminLayout";

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <AdminLayout title="Welcome">
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-xl font-bold text-dark">Dashboard</h2>
        </div>
      </AdminLayout>
    </motion.div>
  );
}

export default Dashboard;
