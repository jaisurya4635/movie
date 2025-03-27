import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import './App.css';

function EmployeeFeedbackForm() {
  const initialValues = {
    fullName: "",
    email: "",
    department: "",
    rating: "",
    feedback: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    department: Yup.string().required("Department is required"),
    rating: Yup.number()
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5")
      .required("Rating is required"),
    feedback: Yup.string().max(200, "Feedback should be under 200 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Form Submitted Successfully!");
    console.log("Form Data:", values);
    resetForm();
  };

  return (
  <div className="container">
  <h2>Employee Feedback Form</h2>
   <Formik
  initialValues={initialValues}
   validationSchema={validationSchema}
  onSubmit={handleSubmit}
 >
   {({ isSubmitting }) => (
    <Form>
    <div>
    <label>Full Name:</label>
   <Field type="text" name="fullName" />
    <ErrorMessage name="fullName" component="div" className="error" />
    </div>

   <div>
   <label>Email:</label>
  <Field type="email" name="email" />
  <ErrorMessage name="email" component="div" className="error" />
   </div>
  <div>
   <label>Department:</label>
   <Field as="select" name="department">
   <option value="">Select department</option>
    <option value="HR">HR</option>
   <option value="Engineering">Engineering</option>
    <option value="Marketing">Marketing</option>
    <option value="Sales Executive">Sales Executive</option>
    <option value="Finance & Accounting"> Finance & Accounting </option>
    </Field>
    <ErrorMessage name="department" component="div" className="error" />
    </div>
    <div>
    <label>Rating (1-5):</label>
    <Field type="number" name="rating" />
    <ErrorMessage name="rating" component="div" className="error" />
    </div>
    <div>
    <label>Feedback:</label>
    <Field as="textarea" name="feedback" />
    <ErrorMessage name="feedback" component="div" className="error" />
    </div>
    <button type="submit" disabled={isSubmitting}>Submit Feedback</button>
    </Form>
     )
     }
    </Formik>
    </div>
  );
}

export default EmployeeFeedbackForm;



