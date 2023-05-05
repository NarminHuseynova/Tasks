import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ReactForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minWidth: 400,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <div>
              <Field
                style={{ padding: 10, borderRadius: 5, minWidth: 250 }}
                type="text"
                name="name"
              />
              <label style={{ marginLeft: 10 }} htmlFor="name">
                Name
              </label>
            </div>
            <ErrorMessage name="name" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "Flex-start",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <div>
              <Field
                style={{ padding: 10, borderRadius: 5, minWidth: 250 }}
                type="email"
                name="email"
              />
              <label style={{ marginLeft: 10 }} htmlFor="email">
                Email
              </label>
            </div>
            <ErrorMessage name="email" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <div>
              <Field
                style={{ padding: 10, borderRadius: 5, minWidth: 250 }}
                type="password"
                name="password"
              />
              <label style={{ marginLeft: 10 }} htmlFor="password">
                Password
              </label>
            </div>
            <ErrorMessage name="password" />
          </div>

          <button
            style={{ marginTop: 10, width: "44%" }}
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ReactForm;
