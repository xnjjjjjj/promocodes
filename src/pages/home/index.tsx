import { useEffect, useState } from "react";
import { Table } from "antd";
import { ColumnsType, PaginationType, ServerType } from "../../types";
import styled from "styled-components";
import { StyledPagination } from "../../components/pagination";

const StyledMain = styled.main`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

interface IServer {
  id: string;
  shop: string;
  data: string;
  quantity: string;
  discount: number;
}

export default function Home() {
  const [data, setData] = useState<ServerType[] | null>(null);
  const [pagination, setPagination] = useState<PaginationType>({
    current: 1,
    pageSize: 10,
    totalPages: 0,
  });
  useEffect(() => {
    fetch(
      `https://pocketbase-front-323.fjx.su/api/collections/servers/records?perPage=${pagination.pageSize}&page=${pagination.current}`
    )
      .then((response) => response.json())
      .then((data) => {
        const pagination = {
          current: data.page,
          pageSize: data.perPage,
          totalPages: data.totalPages,
        };
        setPagination(pagination);
        const servers = data.items.map((item: IServer) => ({
          key: item.id,
          shop: item.shop,
          data: item.data,
          quantity: item.quantity,
          discount: item.discount,
        }));
        setData(servers);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.current, pagination.pageSize]);

  const columns: ColumnsType[] = [
    {
      title: "Shop",
      dataIndex: "shop",
      key: "shop",
    },
    {
      title: "Data",
      dataIndex: "data",
      key: "data",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
  ];

  return (
    <StyledMain>
      <h1>Аренда серверов</h1>
      <h2>Готовые решения</h2>
      {data && <Table dataSource={data} columns={columns} pagination={false} />}
      <StyledPagination
        currentPage={pagination.current}
        totalPages={pagination.totalPages}
        onSwitch={(page) => setPagination({ ...pagination, current: page })}
      />
    </StyledMain>
  );
}
