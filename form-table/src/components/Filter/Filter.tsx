import { Form, Button, Collapse } from "antd";
import style from "./Filter.module.scss";
import { useEffect, useMemo } from "react";
import { CustomColumn } from "./types";

const { Item } = Form;
const { Panel } = Collapse;

interface FilterProps {
  onSubmit: (data: object) => void;
  onClear: () => void;
  className?: string;
  columns?: CustomColumn[];
  count?: number;
  filters: any;
}

export default function Filter({
  onSubmit,
  onClear,
  className,
  columns,
  filters,
  count,
}: FilterProps) {
  const [form] = Form.useForm();

  const clearInput = (): void => {
    onClear();
    form.resetFields();
  };

  useEffect(() => {
    form.setFieldsValue(filters);
  }, [filters, form]);

  const filteredColumns = useMemo(
    () => columns?.filter((item) => item.element !== undefined),
    [columns]
  );

  const countElement = useMemo(
    () =>
      count !== 0 ? (
        <span>
          {Object.values(filters).filter((t) => t !== undefined).length === 0
            ? ""
            : `Axtarışa uyğun ${count} nəticə tapıldı`}
        </span>
      ) : (
        <span>Axtarışa uyğun məlumat tapılmadı</span>
      ),
    [count]
  );

  return (
    <div className={className}>
      <Collapse className={style.container}>
        <Panel
          className={style.title}
          key=""
          extra={countElement}
          header="Filtr"
        >
          <Form
            onFinish={onSubmit}
            form={form}
            className={style.form}
            layout="vertical"
          >
            <div className={style.inputs}>
              {filteredColumns?.map((item) => {
                return (
                  <Item
                    key={
                      item.filterKey !== undefined
                        ? item.filterKey
                        : item.dataIndex
                    }
                    name={
                      item.filterKey !== undefined
                        ? item.filterKey
                        : item.dataIndex
                    }
                    label={item.title}
                    className={style.input}
                  >
                    {item.element}
                  </Item>
                );
              })}
            </div>
            <div className={style.buttons}>
              <Button
                danger={true}
                onClick={clearInput}
                className={style.filter}
              >
                Təmizlə
              </Button>
              <Button htmlType="submit" type="primary">
                Axtar
              </Button>
            </div>
          </Form>
        </Panel>
      </Collapse>
    </div>
  );
}
