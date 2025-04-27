"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { useFeedback } from "@/hooks/useFeedback";
import { cn } from "@/lib/utils";
import { Feedback } from "@/types";
import Link from "next/link";
import { Input } from "@/components/ui/input";

type Props = {};

const columns: ColumnDef<Feedback>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "sub_category",
    header: "Sub Category",
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "pending",
            "bg-orange-200": row.getValue("status") === "processing",
            "bg-green-200": row.getValue("status") === "resolved",
            "bg-yellow-200": row.getValue("status") === "waiting",
            "bg-blue-200": row.getValue("status") === "in_progress",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "keluhan",
    header: "Keluhan",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
];

export default function FeedbackPage({}: Props) {
  const { feedbackData } = useFeedback();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: feedback,
    isLoading: feedbackLoading,
    error: feedbackError,
  } = feedbackData;

  const filteredFeedback = feedback?.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.category.toLowerCase().includes(searchLower) ||
      item.sub_category.toLowerCase().includes(searchLower) ||
      item.unit.toLowerCase().includes(searchLower) ||
      item.status.toLowerCase().includes(searchLower) ||
      item.keluhan.toLowerCase().includes(searchLower)
    );
  });

  if (feedbackLoading) return <p>Loading...</p>;
  if (feedbackError) return <p>Terjadi kesalahan saat mengambil data.</p>;

  if (!feedback) return <p>No feedback data available</p>;

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Feedbacks" />

      <div className="flex items-center gap-4 mb-4">
        <Input
          type="text"
          placeholder="Search feedback..."
          className="border p-2 rounded-md w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link href="/feedback/add">
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">
            Add
          </button>
        </Link>
      </div>

      <DataTable columns={columns} data={filteredFeedback || []} />
    </div>
  );
}
