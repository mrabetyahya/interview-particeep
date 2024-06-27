import { Stack, alpha, styled } from '@mui/material';

export const BoxStyle = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  background: alpha(theme.palette.primary.main, 0.2),
  padding: '1px 8px',
  borderRadius: '50px',
  color: theme.palette.grey[800],
}));

export const SelectorStyle = styled('select')({
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',

  '&:focus': {
    borderColor: '#007bff',
    outline: 'none',
  },
});
