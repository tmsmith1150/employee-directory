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
                  const nameA = a.name.last;
                  const nameB = b.name.last;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedEmployees(updateSort);
              }}
            >
              
            </th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Cell</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map(
            ({
              location: { city, state, country, postcode },
              picture: { thumbnail },
              cell,
              phone,
              email,
              name: { first, last }
            }) => (
              <tr key={last}>
                  <td>
                  <img src={thumbnail} />
                </td>
                <td>{first}</td>
                <td>{last}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{cell}</td>
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