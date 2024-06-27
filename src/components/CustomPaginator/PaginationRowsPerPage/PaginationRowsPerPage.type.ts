export interface PaginatorButtonsProps {
  selectedValue: number;
  total?: number;
  onButtonClick: (n: number) => void;
  setCurrentPage: (value: number) => void;
}
