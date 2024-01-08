import { Autocomplete, Stack, TextField } from '@mui/material';
import {  useMemo } from 'react';
import { FilterInfo, GetFilterInfo } from '@/features/dashboard/types';

interface AutocompleteProps {
  labelname: string;
  display?: any;
  wi?: string;
  value?: GetFilterInfo | null;
  setValue?: (newValue: GetFilterInfo | null) => void;
  data: FilterInfo | undefined;
}

export function MuiAutocompleteGetFilter({
                                           labelname,
                                           display,
                                           value,
                                           setValue,
                                           wi,
                                           data,
                                         }: AutocompleteProps) {
  const AutocompleteDto = useMemo(() => {
    return (data?.content || [])
      .filter(
        (filter: GetFilterInfo) =>
          filter.columnName !== 'OptionNo' &&
          filter.columnName !== 'Status' &&
          filter.columnName !== 'BondingProcess'
      )
      .map((filter: GetFilterInfo) => ({
        id: filter.id,
        columnName: filter.columnName,
        value: filter.value,
      }));
  }, [data]);

  return (
    <Stack spacing={2}>
      {AutocompleteDto !== null && (
        <Autocomplete
          options={AutocompleteDto}
          sx={{ display: display, width: wi, pb: '3px' }}
          renderInput={(params) => <TextField {...params} label={labelname} />}
          value={value}
          onChange={(_, newValue) => setValue && setValue(newValue)}
          getOptionLabel={(option) => option.value}
          isOptionEqualToValue={(option, value) => option.value === value?.value}
        />
      )}
    </Stack>
  );
}