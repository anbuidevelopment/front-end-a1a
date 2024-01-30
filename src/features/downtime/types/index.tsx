export interface LoaderData {
  startDate?: string | null;
  endDate?: string | null;
  factory?: string;
  line?: string;
}

export interface PartsData {
  headers: string[];
  contents: {
    pageIndex: number;
    rowPerPage: number;
    totalElements: number;
    totalPages: number;
    dataList: DataItem[];
  };
}

interface DataItem {
  Tester: string[];
  A1AF4: string[];
  A1AF3: string[];
  A1AF2: string[];
  A1AF1: string[];
  F2A38: string[];
  A1AF1N: string[];
}
