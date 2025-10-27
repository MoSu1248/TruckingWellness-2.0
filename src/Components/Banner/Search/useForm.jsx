import { useState } from "react";
import "./searchBanner.css"

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return [values, handleChange];
};
