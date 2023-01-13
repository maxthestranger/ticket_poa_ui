import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/admin/header";
import Sidebar from "../components/admin/sidebar";

function AdminLayout({ title, children }) {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  return (
    <AnimatePresence initial={false}>
      <div
        key={location.pathname}
        className="w-full h-screen flex bg-secondary"
      >
        <Sidebar />

        <main className="w-full h-screen overflow-y-auto">
          <Header name={user && user.name} />
          <div className="px-4 py-6 min-h-[calc(100vh-4rem)]">
            <h1 className="text-2xl font-bold text-dark">{title}</h1>

            <div className="mt-6">{children}</div>
          </div>
          <div className="mt-6">
            <div className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-xl font-bold text-dark">Footer</h2>
            </div>
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default AdminLayout;
