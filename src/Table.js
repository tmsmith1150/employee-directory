import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div className="div">
      <table className="table">
        <thead>
          <tr>
          <th scope="col">Photo</th>
            <th
              scope="col"
              onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
              First
            </th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">cell</th>
            <th scope="col">city</th>
            <th scope="col">state</th>
            <th scope="col">country</th>
            <th scope="col">postcode</th>
            
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              location: { city, state, country, postcode },
              picture: { thumbnail },
              cell,
              phone,
              email,
              name: { first, last }
            }) => (
              <tr key={state}>
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
                <td>{country}</td>
                <td>{postcode}</td>
                
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;