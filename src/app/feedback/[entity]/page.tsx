"use client";

import React, { useState, useEffect } from "react";
import { useFeedback, useSubCategories } from "@/hooks/useFeedback";
import PageTitle from "@/components/PageTitle";
import { Category } from "@/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import Instance from "@/lib/Instance";

export default function AddFeedbackPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(2);
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
    null
  );
  const [unit, setUnit] = useState<string>("");
  const [keluhan, setKeluhan] = useState<string>("");

  const [picture, setPicture] = useState<File | null>(null);

  const { feedbackData, categoriesData } = useFeedback();
  const {
    data: subCategories,
    isLoading,
    error,
  } = useSubCategories(selectedCategory);
  const {
    data: feedback,
    isLoading: feedbackLoading,
    error: feedbackError,
  } = feedbackData;

  useEffect(() => {
    if (subCategories && subCategories.length > 0) {
      setSelectedSubCategory(subCategories[0].id);
    }
  }, [subCategories]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let payload = {
      id_category: selectedCategory,
      id_sub_category: selectedSubCategory,
      unit: unit,
      keluhan: keluhan,
    };

    try {
      const { data } = await Instance.post("/feedback", payload);

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Feedback berhasil dikirim!",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text:
          error?.response?.data?.message ||
          "Terjadi kesalahan saat mengirim feedback.",
      });
    }
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];

      if (validImageTypes.includes(file.type)) {
        setPicture(file);
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid File",
          text: "File harus berupa gambar (jpg, png, gif, atau webp)",
        });
        e.target.value = "";
      }
    }
  };

  if (isLoading || feedbackLoading) return <p>Loading...</p>;
  if (error || feedbackError)
    return <p>Terjadi kesalahan saat mengambil data.</p>;

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Add Feedback" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <Select
              value={selectedCategory?.toString() ?? ""}
              onValueChange={(value) => setSelectedCategory(Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {categoriesData.data?.map((category: Category) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {subCategories && subCategories.length > 0 && (
            <div className="flex-1 relative">
              <label
                htmlFor="subCategory"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sub Category
              </label>
              <Select
                value={selectedSubCategory?.toString() ?? ""}
                onValueChange={(value) => setSelectedSubCategory(Number(value))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a subcategory" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {subCategories.map((subCategory) => (
                    <SelectItem
                      key={subCategory.id}
                      value={subCategory.id.toString()}
                    >
                      {subCategory.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="unit"
            className="block text-sm font-medium text-gray-700"
          >
            Unit
          </label>
          <Input
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
            className="mt-1 block w-full"
            placeholder="Masukkan unit"
          />
        </div>

        <div>
          <label
            htmlFor="keluhan"
            className="block text-sm font-medium text-gray-700"
          >
            Keluhan
          </label>
          <Textarea
            id="keluhan"
            value={keluhan}
            onChange={(e) => setKeluhan(e.target.value)}
            required
            className="mt-1 block w-full"
            placeholder="Deskripsikan keluhan"
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label
            htmlFor="picture"
            className="block text-sm font-medium text-gray-700"
          >
            Picture
          </label>
          <Input id="picture" type="file" onChange={handlePictureChange} />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Feedback
          </Button>
        </div>
      </form>
    </div>
  );
}
