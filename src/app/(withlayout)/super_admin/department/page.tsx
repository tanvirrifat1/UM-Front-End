"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { useDebounced } from "@/redux/slice/hooks";
import dayjs from "dayjs";
import Link from "next/link";
import ModalPage from "@/components/ui/Modal";

const DepartMent = ({ params }: any) => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });

  const [deleteDepartment] = useDeleteDepartmentMutation();

  const onsubmit = async (id: string) => {
    message.loading("Deleting...");

    try {
      await deleteDepartment(id);
      message.success("Department deleted successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const departments = data?.departments;
  const meta = data?.meta;

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
      render: function (data: any) {
        return data && dayjs(data).format("MMM D,  YYYY hh:mm A");
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button
                style={{ margin: "0px 5px" }}
                type="primary"
                onClick={() => console.log(data)}
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button type="primary" danger onClick={() => onsubmit(data?.id)}>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: any, pageSize: any) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div style={{ margin: "10px" }}>
      <UMbreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <div style={{ margin: "10px" }}>
        <ActionBar title="Department List">
          <Input
            type="text"
            size="large"
            placeholder="Search..."
            style={{
              width: "20%",
              margin: "5px",
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div>
            <Link href="/super_admin/department/create">
              <Button type="primary">Create</Button>
            </Link>
            {(!!sortBy || !!sortOrder || !!searchTerm) && (
              <Button
                onClick={resetFilters}
                type="primary"
                style={{ margin: "0px 5px" }}
              >
                <ReloadOutlined />
              </Button>
            )}
          </div>
        </ActionBar>
      </div>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default DepartMent;
