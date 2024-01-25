export interface FilterData {
  page?: number;
  pageSize?: number;
  position?: string | null;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  item?: string;
}

export interface Data {
  p: number;
  s: number;
  position?: string;
  location?: string;
  start?: string;
  end?: string;
}
