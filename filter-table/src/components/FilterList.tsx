import { Table, Input } from "antd";
import { useState } from "react";
import { DataType } from "./types";
import { dataSource } from "../data/data";

const { Search } = Input;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
];

const FilterList = () => {
  const [filter, setFilter] = useState<DataType[]>(dataSource);

  const handleSearch = (value: string) => {
    const filtered = dataSource.filter((record) =>
      Object.values(record).some((field) => field.toString().includes(value))
    );
    setFilter(filtered);
  };

  return (
    <>
      <Search
        placeholder="Search"
        onSearch={handleSearch}
        style={{ width: 350, marginBottom: 20 }}
      />
      <Table style={{ minWidth: 700 }} dataSource={filter} columns={columns} />
    </>
  );
};

export default FilterList;
