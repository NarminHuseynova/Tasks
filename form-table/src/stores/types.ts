export interface Item {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  rol: any;
  dataIndex: string;
  title: string;
  key: string;
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: Item;
  index: number;
  key: string;
  children: React.ReactNode;
}
