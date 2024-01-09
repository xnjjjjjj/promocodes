import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { columns } from "./table-columns";
import { IPromocode } from "./table-component.interface";
import axios from "axios";

const TableComponent: React.FC = () => {
  const [promocodes, setPromocodes] = useState<IPromocode[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const pageSize = 10;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/promocodes/?page=${currentPage}&page_size=${pageSize}`
        );
        setPromocodes(data.results);
        setTotalPages(Math.ceil(data.count / pageSize));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <Table
        dataSource={promocodes}
        columns={columns}
        pagination={false}
        rowKey="id"
        bordered
      />
      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Предыдущая страница
        </Button>
        <span style={{ margin: "0 8px" }}>
          {currentPage}стр. из {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Следующая страница
        </Button>
      </div>
    </div>
  );
};

export default TableComponent;
