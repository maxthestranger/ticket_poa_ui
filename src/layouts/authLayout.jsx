import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/icons/logo_footer.svg";

function AuthLayout({ title, children }) {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <div
        key={location.pathname}
        className="flex min-h-screen w-full items-center justify-center flex-col bg-secondary border-t-8 border-emerald-500 border-solid"
      >
        <img src={logo} alt="logo" className="mx-auto mb-10" />
        <div className="bg-white text-dark rounded-[40px] mx-auto mt-5 p-16 min-w-[568px]">
          <h1 className="text-2xl text-dark font-bold mb-3 text-center">
            {title}
          </h1>
          <p className="mb-10 text-muted text-sm text-center mx-auto max-w-[246px]">
            To proceed, please provide these credentials
          </p>

          {children}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default AuthLayout;
