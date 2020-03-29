import React, { useState } from "react";
import styles from "./TableComponent.module.scss";

const TableComponent = () => {
  // given array of object
  const initialData = [
    { email: "one@email.com", status: "complete" },
    { email: "two@email.com", status: "incomplete" },
    { email: "three@email.com", status: "complete" },
    { email: "four@email.com", status: "complete" },
    { email: "five@email.com", status: "incomplete" },
    { email: "six@email.com", status: "complete" },
    { email: "seven@email.com", status: "complete" }
  ];
  // deletes row and property from the object
  const deleteRow = email => {
    let newData = data.filter(row => {
      return row.email !== email;
    });
    setData(newData);
  };
  //creating hook
  const [data, setData] = useState(initialData);
  return (
    <div className={styles.container}>
      <div className={styles.formHeader}> React Table</div>
      <table>
        <thead>
          <tr>
            <td>Email</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.email}>
              <td>{row.email}</td>
              <td>{row.status}</td>
              <td>
                <button
                  onClick={() => {
                    deleteRow(row.email);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
