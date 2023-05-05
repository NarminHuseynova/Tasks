import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Menu, MenuProps } from "antd";
import { EditableCellProps, Item } from "../../stores/types";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Constant from "./constant";

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const UserForm: React.FC = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState("2");
  //   const [filter, setFilter] = useState("");

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
    <Form form={form} component={false}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ marginTop: 10 }}
      />

      {/* <Form>
        <Form.Item>
          <Input
            style={{ marginTop: 20 }}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter"
          />
        </Form.Item>
      </Form> */}

      <Button
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 15,
          marginTop: 20,
        }}
      >
        <PlusOutlined />
      </Button>
      <Constant />
    </Form>
  );
};

export default UserForm;
