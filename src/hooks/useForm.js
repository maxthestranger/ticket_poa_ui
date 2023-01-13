import { useState } from "react";
import { debounce, head } from "lodash";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../utils/validation";
import { saveToLocalStorage } from "../utils/storage";
import { mergeNames } from "../utils/helper";

export const useForm = (initialValues, loading, error, success, api, url) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = debounce((e) => {
    setErrors({
      ...errors,
      [e.target.name]: validate(formData)[e.target.name],
    });
  }, 1000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(validate(formData)).length === 0) {
      dispatch(loading());
      try {
        const response = await api(mergeNames(formData));
        const data = {
          token: response.headers["access-token"],
          user: response.data.data,
        };

        dispatch(success(data));
        saveToLocalStorage(data, "user_info");
        setFormData(initialValues);
        navigate(url, { replace: true });
      } catch (e) {
        console.log(e);
        // catch network error
        if (!e.response) {
          dispatch(error("Network Error"));
          return;
        }
        // catch login error
        if (e.response.status === 401) {
          dispatch(error("Invalid email or password"));
          return;
        }

        // catch register error
        if (e.response.status === 422) {
          dispatch(error("Email already exists"));
          return;
        }

        // catch forgot password error
        if (e.response.status === 404) {
          dispatch(error("User not found"));
          return;
        }

        // catch reset password error
        if (e.response.status === 403) {
          dispatch(error("Invalid or expired token"));
          return;
        }

        // catch unknown error
        dispatch(error("Unknown Error"));
      }
    }

    setErrors(validate(formData));
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
