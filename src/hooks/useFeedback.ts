import Instance from "@/lib/Instance";
import { Category, Feedback } from "@/types";
import { useQuery } from "@tanstack/react-query";

// Fetch feedback data
const fetchFeedback = async (): Promise<Feedback[]> => {
  try {
    const response = await Instance.get("/feedback");
    return response.data;
  } catch (error) {
    console.error("Error fetching feedback:", error);
    throw new Error("Failed to fetch feedback data");
  }
};

// Fetch categories
const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await Instance.get("/feedback-category");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
};

// Fetch subcategories based on category ID
const fetchSubCategories = async (id_category: number): Promise<Category[]> => {
  try {
    const response = await Instance.get(
      `/feedback-sub-category?id_category=${id_category}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching subcategories for category ${id_category}:`,
      error
    );
    throw new Error(
      `Failed to fetch subcategories for category ${id_category}`
    );
  }
};

export const useFeedback = () => {
  const feedbackQuery = useQuery({
    queryKey: ["feedback"],
    queryFn: fetchFeedback,
  });

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return {
    feedbackData: feedbackQuery,
    categoriesData: categoriesQuery,
  };
};

export const useSubCategories = (id_category: number) => {
  const subCategoriesQuery = useQuery({
    queryKey: ["subCategories", id_category],
    queryFn: () => fetchSubCategories(id_category),
    enabled: !!id_category,
  });

  return subCategoriesQuery;
};
