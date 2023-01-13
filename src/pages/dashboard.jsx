import { motion } from "framer-motion";
import AdminLayout from "../layouts/adminLayout";
import { useSelector } from "react-redux";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <AdminLayout title="Welcome">
        <p>{user && user.name}</p>
      </AdminLayout>
    </motion.div>
  );
}

export default Dashboard;
