import { RootStyle } from './CustomCard.style';
import { CustomCardProps } from './CustomCard.type';

const CustomCard = ({ children, style }: CustomCardProps) => {
  return <RootStyle style={style}>{children}</RootStyle>;
};

export default CustomCard;
