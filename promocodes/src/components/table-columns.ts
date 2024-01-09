import { ColumnsType } from "antd/es/table";
import { IPromocode } from "./table-component.interface";

export const columns: ColumnsType<IPromocode> = [
    {
      title: 'Код',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Процент',
      dataIndex: 'discount_percent',
      key: 'discount_percent',
    },
    {
      title: 'Работает до',
      dataIndex: 'expiration_date',
      key: 'expiration_date',
    },
    {
      title: 'Рабочий',
      dataIndex: 'is_active',
      key: 'is_active',
    },
    {
      title: 'Магазин',
      dataIndex: 'store',
      key: 'store',
    },
  ];