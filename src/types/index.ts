export type ServerType = {
  key: string;
  shop: string;
  data: string;
  quantity: string;
  discount: string;
};

export type PaginationType = {
  current: number;
  pageSize: number;
  totalPages: number;
};

export type ColumnsType = {
  title: string;
  dataIndex: string;
  key: string;
};

export type FormType = {
  text: string;
  mail: string;
};

export type FormPdfType = {
  text: string;
  picture: string;
};
