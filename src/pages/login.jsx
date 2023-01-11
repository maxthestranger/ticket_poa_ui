import { motion } from "framer-motion";
import { Label, Input, Button } from "../components/common";
import AuthLayout from "../layouts/authLayout";
import { useForm } from "../hooks/useForm";

function Login() {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    email: "",
    password: "",
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <AuthLayout title="Agent Login">
        <form onSubmit={handleSubmit}>
          <div className="mb-7">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <span className="text-red-500 mt-2 block">{errors.email}</span>
            )}
          </div>
          <div className="mb-7">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </Label>
              <a
                href="forgot-password"
                className="font-bold text-primary text-base mb-5 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && (
              <span className="text-red-500 mt-2 block">{errors.password}</span>
            )}
          </div>
          <div className="mb-7">
            <Button type="submit" disabled={isSubmitting}>
              Sign in
            </Button>
          </div>
          <p className="text-dark text-base font-medium">
            Not a partner yet?{" "}
            <a
              href="/sign-up"
              className="font-bold text-primary text-base hover:underline"
            >
              Sign up here
            </a>
          </p>
        </form>
      </AuthLayout>
    </motion.div>
  );
}

export default Login;
