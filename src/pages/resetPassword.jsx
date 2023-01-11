import { Label, Input, Button } from "../components/common";
import AuthLayout from "../layouts/authLayout";

function ResetPassword() {
  return (
    <AuthLayout title="Reset Password">
      <form>
        <div className="mb-7">
          <Label htmlFor="password">
            New Password <span className="text-red-500">*</span>
          </Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your new password"
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
          <Button type="submit">Reset</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default ResetPassword;
