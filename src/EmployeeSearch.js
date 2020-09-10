import React, { useEffect, useState } from "react";

const EmployeeSearch = ({ employees, updateEmployees }) => {
  const [inputValue, updateInput] = useState("");

  useEffect(() => {
    const filteredEmployees =
      inputValue === ""
        ? employees
        : employees.filter(
            ({ name: { last } }) =>
              last.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
          );

    updateEmployees(filteredEmployees);
  }, [inputValue, employees]);

  return (
    <input value={inputValue} onChange={e => updateInput(e.target.value)} />
  );
};

export default EmployeeSearch;