import { useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import AuthLayout from "../layouts/authLayout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <AuthLayout title={error.status}>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </AuthLayout>
    </motion.div>
  );
}
