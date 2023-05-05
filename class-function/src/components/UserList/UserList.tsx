import { useState, useEffect } from "react";

interface IUser {
  id: string;
  name: string;
  email: string;
}

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const renderUser = (user: IUser) => {
    return (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{users.map((user) => renderUser(user))}</div>;
};

export default UserList;
