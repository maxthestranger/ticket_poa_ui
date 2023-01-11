import { motion } from "framer-motion";
import { Label, Input, Button } from "../components/common";
import AuthLayout from "../layouts/authLayout";
import { useForm } from "../hooks/useForm";

function ResetPassword() {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
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
      <AuthLayout title="Reset Password">
        <form onSubmit={handleSubmit}>
          <div className="mb-7">
            <Label htmlFor="password">
              New Password <span className="text-red-500">*</span>
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your new password"
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
              type="confirm_password"
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
              Reset
            </Button>
          </div>
        </form>
      </AuthLayout>
    </motion.div>
  );
}

export default ResetPassword;
