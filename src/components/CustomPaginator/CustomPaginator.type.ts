export interface CustomPaginatorProps {
  currentPage: number;
  totalRows: number;
  elementPerPage: number;
  setCurrentPage: (value: number) => void;
  setElementPerPage: (value: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}
