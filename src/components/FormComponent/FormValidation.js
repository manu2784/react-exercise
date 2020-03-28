export default (name, value) => {
  let valid;
  switch (name) {
    case "firstName":
      valid = value.length > 1;
      break;
    case "lastName":
      valid = value.length > 1;
      break;
    case "phoneNumber":
      valid = /^\d+$/.test(value);
      break;
    case "email":
      valid = /^[^@]+@[^@]+\.[^@]+$/.test(value);
      break;
    default:
      break;
  }
  return valid;
};
