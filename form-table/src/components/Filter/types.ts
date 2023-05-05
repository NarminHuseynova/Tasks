import { ReactNode } from "react";
import { ColumnGroupType } from "antd/es/table";

type F<T> = ColumnGroupType<T>;

export type CustomColumn<T = unknown> = F<T> & {
  element?: ReactNode;
  title: string;
  dataIndex?: keyof T | "";
  filterKey?: keyof T | "";
  children: CustomColumn[];
};

export type FilterableColumns<T> = Array<CustomColumn<T>>;
