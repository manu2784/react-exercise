// function to contain input validation logic
export default (name, value) => {
  switch (name) {
    case "firstName":
      return value.length > 1;
    case "lastName":
      return value.length > 1;
    case "phoneNumber":
      return /^\d+$/.test(value);
    case "email":
      return /^[^@]+@[^@]+\.[^@]+$/.test(value);
    default:
      break;
  }
};
