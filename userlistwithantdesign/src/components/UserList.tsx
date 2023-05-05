import { Form, Menu, MenuProps, Table } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Item } from "../types";
import baseService from "../baseService";

function UserList() {
  const [data, setData] = useState<Array<Item>>([]);

  useEffect(() => {
    baseService.get("/items").then(({ data: _data }) => {
      setData(_data);
    });
  }, []);

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
    ],
    []
  );

  return (
    <Form component={false}>
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
