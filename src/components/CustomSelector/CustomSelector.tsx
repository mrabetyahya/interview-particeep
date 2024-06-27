import { IconButton, Stack, Typography } from '@mui/material';
import { BoxStyle, SelectorStyle } from './CustomSelector.style';
import { CustomSelectorProps } from './CustomSelector.type';
import ClearIcon from '@mui/icons-material/Clear';

function CustomSelector({ selectedOption, options, setSelectedOption }: CustomSelectorProps) {
  const selectorOption = options?.filter((value) => !selectedOption?.includes(value));

  const handleOnDelete = (option: string) => {
    setSelectedOption(selectedOption?.filter((item) => item !== option));
  };

  return (
    <>
      <SelectorStyle
        value={''}
        onChange={(e) => setSelectedOption([...(selectedOption ?? []), e.target.value])}
      >
        <option value="" disabled hidden>
          Sélectionner catégorie
        </option>
        {selectorOption?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectorStyle>
      <Stack direction={'row'} spacing={1}>
        {selectedOption &&
          selectedOption.map((value) => (
            <BoxStyle alignItems={'center'} spacing={1} direction={'row'} key={value}>
              <Typography variant="subtitle2">{value}</Typography>
              <IconButton onClick={() => handleOnDelete(value)}>
                <ClearIcon sx={{ color: 'red' }} />
              </IconButton>
            </BoxStyle>
          ))}
      </Stack>
    </>
  );
}

export default CustomSelector;
