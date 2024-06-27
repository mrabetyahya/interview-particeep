import { TextStyle, RootStyle, StackStyle } from './CustomButton.style';
import { CustomButtonProps } from './CustomButton.type';

function CustomButton({ text, icon, disabled, style, onClick }: CustomButtonProps) {
  return (
    <RootStyle onClick={onClick} style={style} disabled={disabled ?? false}>
      <StackStyle direction={'row'} align="center" spacing={1}>
        {icon}
        <TextStyle style={style}>{text}</TextStyle>
      </StackStyle>
    </RootStyle>
  );
}

export default CustomButton;
