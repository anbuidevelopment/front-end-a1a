import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

interface InputFieldProps {
  id?: string;
  labelName?: string;
  inputError?: boolean;
  valueName?: string | number;
  setValue: (value: any) => void;
  endAdornment?: any;
  startAdornment?: any;
  type?: string;
  enable?: any;
  rowNum?: number;
  multiline?: boolean;
  onEnterPress?: () => void;
  fullwidth?: boolean;
}

export const InputField = ({
  id,
  labelName,
  inputError,
  valueName,
  setValue,
  endAdornment,
  startAdornment,
  type,
  enable,
  rowNum,
  multiline,
  onEnterPress,
  fullwidth,
}: InputFieldProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnterPress) {
      onEnterPress();
    }
  };
  return (
    <FormControl fullWidth={fullwidth}>
      <InputLabel htmlFor={id} error={inputError}>
        {labelName}
      </InputLabel>
      <OutlinedInput
        sx={{ borderRadius: '16px', background: 'initial' }}
        rows={rowNum}
        multiline={multiline}
        id={id}
        value={valueName}
        label={labelName}
        onChange={(e) => setValue(e.target.value)}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        error={inputError}
        type={type}
        disabled={enable}
        onKeyDown={handleKeyPress}
      />
    </FormControl>
  );
};
