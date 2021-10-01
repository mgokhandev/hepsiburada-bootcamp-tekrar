import React, { useState } from "react";
import PropTypes from "prop-types";

function Users({ title, list }) {
  const [users, setUsers] = useState([{ name: "Mehmet" }, { name: "Elif" }]);
  const [name, setName] = useState("");

  const addNewUser = () => {
    setUsers([...users, { name }]);
    setName("");
  };

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {i + 1}.{user.name}
          </li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addNewUser}>Add</button>
    </div>
  );
}

Users.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

Users.defaultProps = {
  title: "Kullanicilar",
};
export default Users;
