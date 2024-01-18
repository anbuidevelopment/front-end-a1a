import {
  FormControl,
  FormHelperText,
  InputLabel,
  InternalStandardProps as StandardProps,
  OutlinedInput,
} from '@mui/material';
import React from 'react';
import { InputBaseProps } from '@mui/material/InputBase';

interface OutlinedInputCustomProps extends StandardProps<InputBaseProps> {
  onEnterPress?: () => void;
  onChange: (a : any) => void;
  onDoubleClick?:(e:any)=>void;
  label?: string;
  helperText?:string
}

export const InputField = ((props: OutlinedInputCustomProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (props.onEnterPress) {
        props.onEnterPress();
      }
    }
    if (props.type === 'number' && ['e', '+', '-'].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
  };
  return (
    <FormControl fullWidth={props.fullWidth}>
      <InputLabel htmlFor={props.id} error={props.error}>
        {props.label}
      </InputLabel>
      <OutlinedInput
        fullWidth={props.fullWidth}
        sx={{ borderRadius: '16px', background: 'initial' }}
        rows={props.rows}
        multiline={props.multiline}
        id={props.id}
        name={props.name}
        value={props.value}
        label={props.label}
        onChange={props.onChange}
        endAdornment={props.endAdornment}
        startAdornment={props.startAdornment}
        error={props.error}
        type={props.type}
        disabled={props.disabled}
        onKeyDown={handleKeyPress}
        onDoubleClick={props.onDoubleClick}
      />
      <FormHelperText sx={{color:'#0487D9'}}>{props.helperText}</FormHelperText>
    </FormControl>
  );
});
