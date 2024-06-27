import { Stack, Typography } from '@mui/material';
import { PaginatorButtonStyle } from '../CustomPaginator.style';
import { PaginatorButtonsProps } from './PaginationRowsPerPage.type';

const buttons = [{ value: 4 }, { value: 8 }, { value: 12 }];

const PaginationRowsPerPage = ({
  selectedValue,
  total,
  onButtonClick,
  setCurrentPage,
}: PaginatorButtonsProps) => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={'10px'}>
      <Stack direction="row" spacing={0.5}>
        {buttons.map(({ value }, index) => (
          <PaginatorButtonStyle
            disabled={index !== 0 && (!total || value >= total * 2)}
            key={value}
            selected={selectedValue === value}
            onClick={() => {
              onButtonClick(value);
              setCurrentPage(1);
            }}
          >
            {value}
          </PaginatorButtonStyle>
        ))}
      </Stack>
      <Typography variant="body2">{'Éléments par page'}</Typography>
    </Stack>
  );
};

export default PaginationRowsPerPage;
