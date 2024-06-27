import { Button, alpha, styled } from '@mui/material';

export const PaginatorButtonStyle = styled(Button)(
  ({ selected }: { selected: boolean }) =>
    ({ theme }) => {
      return {
        paddingInline: '10px' ,
        width: 36,
        height: 36,
        minWidth: 36,
        color: selected ? theme.palette.primary.main : theme.palette.text.primary,
        borderColor: selected ? theme.palette.primary.main : 'transparent',
        backgroundColor: selected
          ? alpha(theme.palette.primary.main, 0.09)
          : alpha(theme.palette.grey[300], 0.6),
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.25rem',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,

        ':disabled': {
          color: theme.palette.grey[400],
          opacity: 0.7,
        },

        ':hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.09),
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
        },
      };
    },
);
