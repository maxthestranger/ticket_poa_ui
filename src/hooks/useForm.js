import { useState } from "react";
import { debounce } from "lodash";
import { validate } from "../utils/validation";

export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = debounce(() => {
    setErrors(validate(formData));
  }, 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      //  TODO: Send data to server

      // TODO: Reset form
      setFormData(initialValues);
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
