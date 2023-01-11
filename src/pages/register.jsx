import { motion } from "framer-motion";
import { Label, Input, Button } from "../components/common";
import AuthLayout from "../layouts/authLayout";

function Register() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <AuthLayout title="Apply as an Agent">
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
          <div className="mb-7 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <Label htmlFor="first_name">
                First name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="first_name"
                placeholder="Enter your first name"
                id="first_name"
              />
            </div>
            <div>
              <Label htmlFor="last_name">
                Last name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                name="last_name"
                placeholder="Enter your last name"
                id="last_name"
              />
            </div>
          </div>
          <div className="mb-7">
            <Label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          <div className="mb-7">
            <Label htmlFor="password">
              Confirm Password <span className="text-red-500">*</span>
            </Label>
            <Input
              type="confirm_password"
              name="confirm_password"
              placeholder="Confirm the password"
              id="confirm_password"
            />
          </div>
          <div className="mb-7">
            <Button type="submit">Sign up</Button>
          </div>
          <p className="text-dark text-base font-medium">
            Already have an account?{" "}
            <a
              href="/"
              className="font-bold text-primary text-base hover:underline"
            >
              Sign in here
            </a>
          </p>
        </form>
      </AuthLayout>
    </motion.div>
  );
}

export default Register;
