import { Autocomplete, InternalStandardProps as StandardProps, OutlinedInput, Stack, TextField } from '@mui/material';
import React from 'react';
import { InputBaseProps } from '@mui/material/InputBase';
import { FilterFormat } from '@/hooks/useStyleInfo';

interface AutoCompleteCustomProps extends StandardProps<InputBaseProps> {
  onEnterPress?: () => void;
  onChange: (v : any) => void;
  label?: string;
  autoCompleteDto?:FilterFormat[];
  wi?:string
  value:FilterFormat | null | undefined
}


export const AutoCompleteMui = ((props: AutoCompleteCustomProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && {}) {
    }
  };
  return (
    <Stack spacing={2}>
      { props.autoCompleteDto !== undefined && (
        <Autocomplete
          disabled={props.disabled}
          id={props.id}
          options={props.autoCompleteDto}
          sx={{width: props.wi, pb: '3px'}}
          renderInput={(params) => <TextField {...params} label={props.label}/>}
          value={props.value}
          onChange={props.onChange}
          getOptionLabel={(option) => option.value}
          isOptionEqualToValue={(option, value) => option.value === value?.value}
        />
      )}
    </Stack>
  );
});
