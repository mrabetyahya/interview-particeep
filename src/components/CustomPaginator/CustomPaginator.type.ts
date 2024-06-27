export interface CustomPaginatorProps {
  currentPage: number;
  totalRows: number;
  elementPerPage: number;
  setElementPerPage: (value: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}
