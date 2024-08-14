import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback, validateCallback = null) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    setErrors((state) => ({
      ...state,
      [e.target.name]: "",
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validateCallback) {
      const validationErrors = validateCallback(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }

    await submitCallback(values);
    setValues(initialValues);
  };

  return {
    values,
    errors,
    changeHandler,
    submitHandler,
  };
}