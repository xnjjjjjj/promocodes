import React from 'react';
import { Table } from 'antd';
import { columns } from './table-columns';
import { IPromocode } from './table-component.interface';


const TableComponent: React.FC = () => {

    const promocodes: IPromocode[] = [
        {
            code: 'promo',
            description: 'скидка',
            discount_percent: 10,
            expiration_date: '09.01.2024',
            is_active: true,
            store: 1
        },
        {
            code: 'promo123',
            description: 'скидка123',
            discount_percent: 20,
            expiration_date: '09.01.2024',
            is_active: true,
            store: 2
        },
        {
            code: 'promo456',
            description: 'скидка456',
            discount_percent: 30,
            expiration_date: '09.01.2024',
            is_active: true,
            store: 3
        },
    ]
  

  return (
    <div>
      <Table dataSource={promocodes} columns={columns} rowKey="code" bordered />
    </div>
  );
};

export default TableComponent;
