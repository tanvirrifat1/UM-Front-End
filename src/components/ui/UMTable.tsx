"use client";
import { Table } from "antd";

const UMTable = () => {
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
  ];

  const handlePageSizeChange = (page: any, pageSize: any) => {
    console.log("page", page);
    console.log("pageSize", pageSize);
  };

  const tableData = [
    {
      key: "1",
      name: "Jhony Deep",
      age: 32,
    },
    {
      key: "2",
      name: "JIm Green",
      age: 42,
    },
  ];

  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={tableData}
      pagination={{
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: handlePageSizeChange,
      }}
    />
  );
};

export default UMTable;
