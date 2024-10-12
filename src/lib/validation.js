export const validateForm = (values) => {
  const errors = {};
  if (!values.email) errors.email = "Email is required *";
  if (!values.phone) errors.phone = "Phone is required *";
  if (!values.name) errors.name = "Name is required *";
  return errors;
};
