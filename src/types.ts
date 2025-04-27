export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export interface Feedback {
  id: number;
  category: string;
  sub_category: string;
  unit: string;
  status: string;
  keluhan: string;
  created_at: string;
}

export type Category = {
  id: number;
  name: string;
};

export type SubCategory = {
  id: number;
  id_category: number;
  name: string;
};
