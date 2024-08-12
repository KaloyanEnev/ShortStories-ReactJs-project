import { useEffect, useState } from "react";
export function useForm(initialValues, submitCallback) {
  const [values, setValues] = useState(initialValues);

  // might remove this
  useEffect(()=>{
setValues(initialValues)
  },[initialValues])

  // TO DO - add support for check boxes
  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler =async (e) => {
    e.preventDefault();
    // if u have problem change places of submitcallback and setValues
    await  submitCallback(values);
    setValues(initialValues)
    
  };
  return {
    values,
    changeHandler,
    submitHandler,
  };
}