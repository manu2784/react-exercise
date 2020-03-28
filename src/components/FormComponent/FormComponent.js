import React, { useState } from "react";
import styles from "./FormComponent.module.scss";
import validate from "./FormValidation";

const FormComponent = () => {
  const formSchema = {
    firstName: {
      type: "text",
      label: "First Name",
      err: false,
      value: "",
      errMsg: ""
    },
    lastName: {
      type: "text",
      label: "Last Name",
      err: false,
      value: "",
      errMsg: ""
    },
    phoneNumber: {
      type: "tel",
      label: "Phone Number",
      err: false,
      value: "",
      errMsg: ""
    },
    email: {
      type: "email",
      label: "Email",
      err: false,
      value: "",
      errMsg: ""
    }
  };

  const [formData, setFormData] = useState(formSchema);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    let newValue = { ...formData[name], value };
    setFormData({ ...formData, [name]: newValue });
  };

  const checkField = event => {
    const { name, value } = event.target;

    if (!value) {
      let newValue = { ...formData[name], err: true, errMsg: "required" };
      setFormData({ ...formData, [name]: newValue });
      return;
    }
    let valid = validate(name, value);

    if (valid) {
      let newValue = { ...formData[name], err: false };
      setFormData({ ...formData, [name]: newValue });
    } else {
      let newValue = {
        ...formData[name],
        value: "",
        err: true,
        errMsg: "invalid"
      };
      setFormData({ ...formData, [name]: newValue });
    }
  };

  const submitForm = event => {
    event.preventDefault();

    let invalidFields = Object.keys(formData).filter(key => {
      return formData[key].err || !formData[key].value;
    });

    if (invalidFields.length > 0) {
      alert("Please complete the form");
      return;
    }

    let data = {};
    Object.keys(formData).map(key => {
        data[key]= formData[key].value;
      });

    console.info("%c Form Data","color:green; font-size:20px",data);
    setFormSubmitted(true);
  };

  return (
    <div className={styles.container}>
    <div className={styles.formHeader}> React Form</div>    
      <form>
        {Object.keys(formSchema).map(key => {
          return (
            <div className={styles.formField} key={key}>
              <label htmlFor={key}> {formData[key].label}</label>
              <input
                name={key}
                type={formData[key].type}
                id={key}
                onChange={handleChange}
                value={formData[key].value}
                onBlur={checkField}
              />
              {formData[key].err && (
                <span className={styles.error}>
                  {formData[key].label} is {formData[key].errMsg}
                </span>
              )}
            </div>
          );
        })}

        <div className={styles.formField}>
          <button type="submit" onClick={submitForm}>
            Submit
          </button>
        </div>
        { formSubmitted && <span className={styles.info}>Form Submitted Successfully!</span>}
      </form>
    </div>
  );
};

export default FormComponent;
