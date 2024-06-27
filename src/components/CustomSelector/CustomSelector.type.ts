export interface CustomSelectorProps {
  selectedOption?: string[];
  options?: string[];
  setSelectedOption: (value?: string[]) => void;
}
