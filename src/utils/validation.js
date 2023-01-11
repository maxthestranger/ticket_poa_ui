export const validate = (formData) => {
  const errors = {};

  if (!formData.first_name) {
    errors.first_name = "First name is required";
  } else if (
    formData.first_name.length < 3 ||
    formData.first_name.length > 20
  ) {
    errors.first_name = "First name must be between 3 and 20 characters long";
  }

  if (!formData.last_name) {
    errors.last_name = "Last name is required";
  } else if (formData.last_name.length < 3 || formData.last_name.length > 20) {
    errors.last_name = "Last name must be between 3 and 20 characters long";
  }

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  if (
    !formData.confirm_password ||
    formData.confirm_password !== formData.password
  ) {
    errors.confirm_password = "Passwords do not match";
  }

  return errors;
};
