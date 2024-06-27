import { ReactElement } from 'react';

export interface CustomButtonProps {
  text: string;
  icon?: ReactElement;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick: () => void;
}
