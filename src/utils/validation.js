export const validate = (formData) => {
  let errors = {};
  Object.keys(formData).forEach((key) => {
    if (!formData[key]) {
      errors[key] = `${key} is required`;
    } else if (formData[key].trim() === "") {
      errors[key] = `${key} cannot be empty`;
    } else {
      switch (key) {
        case "email":
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData[key])) {
            errors[key] = "Invalid email address";
          }
          break;
        case "password":
          if (formData[key].length < 6) {
            errors[key] = "Password must be at least 6 characters long";
          }
          break;
        case "passwordConfirmation":
          if (formData[key] !== formData.password) {
            errors[key] = "Passwords do not match";
          }
          break;
        default:
          break;
      }
    }
  });
  return errors;
};
