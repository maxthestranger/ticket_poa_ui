import { Label, Input, Button } from "../components/common";
import AuthLayout from "../layouts/authLayout";

function ForgotPassword() {
  return (
    <AuthLayout title="Request Password Reset">
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
          <Button type="submit">Request</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;
