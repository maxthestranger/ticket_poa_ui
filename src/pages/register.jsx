import { motion } from "framer-motion";
import { Label, Input, Button } from "../components/common";
import AuthLayout from "../layouts/authLayout";
import { useForm } from "../hooks/useForm";

function Register() {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <AuthLayout title="Apply as an Agent">
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
                value={formData.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first_name && (
                <span className="text-red-500 mt-2 block">
                  {errors.first_name}
                </span>
              )}
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
                value={formData.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last_name && (
                <span className="text-red-500 mt-2 block">
                  {errors.last_name}
                </span>
              )}
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
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && (
              <span className="text-red-500 mt-2 block">{errors.password}</span>
            )}
          </div>
          <div className="mb-7">
            <Label htmlFor="password">
              Confirm Password <span className="text-red-500">*</span>
            </Label>
            <Input
              type="password"
              name="confirm_password"
              placeholder="Confirm the password"
              id="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && (
              <span className="text-red-500 mt-2 block">
                {errors.confirm_password}
              </span>
            )}
          </div>
          <div className="mb-7">
            <Button type="submit" disabled={isSubmitting}>
              Sign up
            </Button>
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
