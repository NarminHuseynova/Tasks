import { Form, Menu, MenuProps, Table } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Item } from "../../stores/types";
import baseService from "../../stores/baseService";
import { Link } from "react-router-dom";

function UserList() {
  const [data, setData] = useState<Array<Item>>([]);
  const [current, setCurrent] = useState("1");

  useEffect(() => {
    baseService.get("/items").then(({ data: _data }) => {
      setData(_data);
    });
  }, []);

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

  const columns = useMemo(
    () => [
      {
        title: "№",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Ad",
        dataIndex: "first_name",
        key: "first_name",
      },
      {
        title: "Soyad",
        dataIndex: "last_name",
        key: "last_name",
      },
      {
        title: "E-poçt",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Rol",
        dataIndex: "rol",
        key: "rol",
        children: [],
      },
    ],
    []
  );

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Form component={false}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          marginTop: 10,
          marginBottom: 30,
        }}
      />
      <Table
        bordered
        dataSource={data}
        columns={columns}
        rowClassName="editable-row"
      />
    </Form>
  );
}

export default UserList;
