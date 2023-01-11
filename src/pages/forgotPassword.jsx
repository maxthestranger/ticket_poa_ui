import { motion } from "framer-motion";
import { Label, Input, Button } from "../components/common";
import AuthLayout from "../layouts/authLayout";
import { useForm } from "../hooks/useForm";

function ForgotPassword() {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    email: "",
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <AuthLayout title="Request Password Reset">
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
            <Button type="submit" disabled={isSubmitting}>
              Request
            </Button>
          </div>
        </form>
      </AuthLayout>
    </motion.div>
  );
}

export default ForgotPassword;
