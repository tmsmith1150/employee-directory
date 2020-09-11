import React, { useState, useEffect } from "react";
import "css";

const Employees = ({ employees }) => {
  const [sortedEmployees, updateSortedEmployees] = useState([]);

  useEffect(() => updateSortedEmployees(employees), [employees]);

  return (
    <div className="div">
      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => {
                const employeesCopy = [...employees];
                const updateSort = employeesCopy.sort((a, b) => {
                  const stateA = a.state;
                  const stateB = b.state;

                  if (stateA < stateB) {
                    return -1;
                  }
                  if (stateA > stateB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedEmployees(updateSort);
              }}
            >
              
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map(
            ({
              location: { city, state },
              picture: { thumbnail },
              phone,
              email,
              name: { first, last }
            }) => (
              <tr key={state}>
                  <td>
                  <img src={thumbnail} />
                </td>
                <td>{first} {last}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{city}</td>
                <td>{state}</td>
                
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;