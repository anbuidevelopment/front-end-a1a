export interface LoaderData {
  startDate?: string | null;
  endDate?: string | null;
  position?: string;
  location?: string;
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
  Gerber: string[];
  MachStore: string[];
}
