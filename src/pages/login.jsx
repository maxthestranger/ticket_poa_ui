import { motion } from "framer-motion";
import { Label, Input, Button } from "../components/common";
import AuthLayout from "../layouts/authLayout";

function Login() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <AuthLayout title="Agent Login">
        <form>
          <div className="mb-7">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
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
            />
          </div>
          <div className="mb-7">
            <Button type="submit">Sign in</Button>
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
