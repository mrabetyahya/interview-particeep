import { Stack } from '@mui/material';
import { useMemo } from 'react';
import { PaginatorButtonStyle } from './CustomPaginator.style';
import { CustomPaginatorProps } from './CustomPaginator.type';
import PaginationRowsPerPage from './PaginationRowsPerPage/PaginationRowsPerPage';

function CustomPaginator({
  currentPage,
  totalRows,
  elementPerPage,
  setCurrentPage,
  setElementPerPage,
  handleNextPage,
  handlePrevPage,
}: CustomPaginatorProps) {
  const maxOfPages = useMemo(
    () => currentPage * elementPerPage >= totalRows,
    [elementPerPage, currentPage, totalRows],
  );

  return (
    <Stack
      direction="row"
      justifyContent={'space-between'}
      flexWrap={'wrap'}
      gap={'1.5rem'}
      width={'100%'}
    >
      <PaginationRowsPerPage
        selectedValue={elementPerPage}
        total={totalRows}
        setCurrentPage={setCurrentPage}
        onButtonClick={setElementPerPage}
      />
      <Stack direction={'row'} spacing={1.5}>
        <PaginatorButtonStyle
          selected={false}
          sx={{ width: 'auto' }}
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          {'Précédent'}
        </PaginatorButtonStyle>
        <PaginatorButtonStyle selected={true}>{currentPage}</PaginatorButtonStyle>
        <PaginatorButtonStyle
          selected={false}
          sx={{ width: 'auto' }}
          disabled={maxOfPages}
          onClick={handleNextPage}
        >
          {'Suivant'}
        </PaginatorButtonStyle>
      </Stack>
    </Stack>
  );
}

export default CustomPaginator;
