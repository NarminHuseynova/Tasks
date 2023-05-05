import { useState } from "react";
import { Modal, Button, Form, Input, Select, Popconfirm } from "antd";
import { Option } from "antd/es/mentions";
import { EditOutlined } from "@ant-design/icons";
import baseService from "../../stores/baseService";

export default function Modals({ size, icon, onClick, editingId }: any) {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleOk = () => {
    form.submit();
    // baseService.put(`/items/${}`).then(({ data: _data }) => {
    //   setData(_data);
    // });
    console.log(form);
  };

  const onFinish = () => {
    console.log("Form submited!");
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back">
            <Popconfirm title="Sure to cancel?" onConfirm={handleCancel}>
              Cancel
            </Popconfirm>
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form
          labelCol={{ xs: { span: 6 } }}
          wrapperCol={{ xs: { span: 12 } }}
          form={form}
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Ad:"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Input type={"text"} placeholder={"Adınızı daxil edin"} />
          </Form.Item>
          <Form.Item
            name="surname"
            label="Soyad:"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Input type={"text"} placeholder={"Soyadınızı daxil edin"} />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-poçt:"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Input type={"email"} placeholder={"E-poçtunuzu daxil edin"} />
          </Form.Item>
          <Form.Item
            name="rol"
            label="Rol:"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Select placeholder={"Rol seçin"}>
              <Option value="True">Admin</Option>
              <Option value="False">Moderator</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
