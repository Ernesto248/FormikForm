import { useFormik } from "formik";
import { basicSchema } from "../schema";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  toast.success("Form submitted correctly");
};

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          placeholder="Enter your email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="age">age</label>
        <input
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          id="age"
          type="age"
          placeholder="Enter your age"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
        <label htmlFor="password">password</label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          type="password"
          placeholder="Enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <label htmlFor="confirmPassword">confirmPassword</label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword"
          type="password"
          placeholder="Enter your password again"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default BasicForm;
