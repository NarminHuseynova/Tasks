import { Button, Form, Input, InputNumber, Space, Table, Tooltip } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import Modals from "../../components/Modals/Modals";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { EditableCellProps, Item } from "../../stores/types";
import style from "./UserForm.module.scss";
import baseService from "../../stores/baseService";

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

function Constant() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form] = Form.useForm();
  const [data, setData] = useState<Array<Item>>([]);

  const isEditing = useCallback(
    (record: Item) => record.id === editingId,
    [editingId]
  );

  useEffect(() => {
    baseService.get("/items").then(({ data: _data }) => {
      setData(_data);
    });
  }, []);

  const edit = useCallback(
    async (record: Partial<Item>, id: number) => {
      form.setFieldsValue({
        first_name: "",
        last_name: "",
        email: "",
        rol: "",
        ...record,
      });
      console.log(record, id);
      setEditingId(record.id!);
    },
    [form]
  );

  const cancel = () => {
    setEditingId(null);
  };

  const save = useCallback(
    async (id: number) => {
      try {
        const row = (await form.validateFields()) as Item;
        const newData = [...data];
        const index = newData.findIndex((item) => id === item.id);

        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
        } else {
          newData.push(row);
        }

        baseService.put(`/items/${id}`, { ...row, id }).then(() => {
          setData(newData);
          setEditingId(null);
        });
      } catch (errInfo) {
        console.log("Validate Failed:", errInfo);
      }
    },
    [data, form]
  );

  const handleDelete = useCallback(
    async (id: number) => {
      await baseService.delete(`/items/${id}`);
      baseService.get("/items").then(({ data: _data }) => {
        setData(_data);
      });
      //   setData(newData);
    },
    [data]
  );

  const columns = useMemo(
    () => [
      {
        title: "№",
        dataIndex: "id",
        key: "id",
        width: 80,
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
      {
        title: "Əməliyyatlar",
        dataIndex: "operation",
        key: "operation",
        width: 200,
        render: (_: any, record: Item) => {
          const editable = isEditing(record);
          return editable ? (
            <>
              <Space>
                <Tooltip placement="top" title="Redaktə et">
                  <Modals
                    size="small"
                    icon={<EditOutlined />}
                    onClick={() => save(record.id)}
                  />
                </Tooltip>
              </Space>
            </>
          ) : (
            <>
              <Modals
                size="small"
                icon={<EditOutlined />}
                disabled={editingId !== null}
                onClick={() => edit(record, record.id)}
                editingId={editingId}
              />
              <Button
                className={style.btnIcon}
                title="Sure to delete?"
                onClick={() => handleDelete(record.id)}
              >
                <a href="#/">
                  <DeleteOutlined />
                </a>
              </Button>
            </>
          );
        },
      },
    ],
    [edit, editingId, handleDelete, isEditing, save]
  );

  return (
    <>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </>
  );
}

export default Constant;
