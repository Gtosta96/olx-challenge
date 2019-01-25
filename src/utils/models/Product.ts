export interface IProducts {
  page: number;
  total_pages: number;
  ads: IProduct[];
}

export interface IProduct {
  id: string;
  title: string;
  created: string;
  description: string;
  params: string[][];
  city_label: string;
}