import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { FormStyleDataInfo } from '@/features/style_info';

function PadPrintForm({formData,onChange}:FormStyleDataInfo) {

  const items = [
    {
      label: 'PadPrint Position',
      value: formData.padPrintPosition || '',
      nameData: 'padPrintPosition',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'PadPrint Total SMV',
      value: formData.padPrintTotalSMV || '',
      nameData: 'padPrintTotalSMV',
      type:'number',
      onChange: onChange,
    },
  ];

  return (
    <Card>
      <CardContent>
        <Grid container
              direction={'row'}
              justifyContent={'left'}
              alignItems={'stretch'}
              spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item xs={12} md={3}>
              <InputField
                onChange={item.onChange}
                type={item.type}
                fullWidth={true}
                name={item.nameData}
                id={item.nameData}
                value={item.value}
                label={item.label}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default PadPrintForm;