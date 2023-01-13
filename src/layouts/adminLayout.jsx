import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/icons/logo_footer.svg";

function AdminLayout({ title, children }) {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <div
        key={location.pathname}
        className="flex min-h-screen w-full items-center justify-center flex-col bg-secondary border-t-8 border-emerald-500 border-solid"
      >
        <img src={logo} alt="logo" className="mx-auto mb-10" />
        <div className="bg-white text-dark rounded-[3rem] mx-auto mt-5 p-16 min-w-11/12 md:min-w-[35.5rem]">
          <h1 className="text-2xl text-dark font-bold mb-3 text-center">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default AdminLayout;
