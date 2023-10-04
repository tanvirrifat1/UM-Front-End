"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const DepartMent = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<Number>(10);
  const [page, setPage] = useState<Number>(1);

  query["limit"] = size;
  query["page"] = page;

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  console.log(data, "data");

  const { departments, meta } = data;

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
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            x
          </Button>
        );
      },
    },
  ];

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

  const onPaginationChange = (page: any, pageSize: any) => {
    console.log("page", page);
    console.log("pageSize", pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
  };

  return (
    <div>
      <UMbreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={tableData}
        pageSize={5}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default DepartMent;
