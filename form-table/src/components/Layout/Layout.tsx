import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Layout() {
  const [current, setCurrent] = useState("");

  const items: MenuProps["items"] = [
    {
      label: <Link to="/">UserList</Link>,
      key: "1",
    },
    {
      label: <Link to="/user-form">UserForm</Link>,
      key: "2",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ marginBottom: 30 }}
      />
    </div>
  );
}

export default Layout;
