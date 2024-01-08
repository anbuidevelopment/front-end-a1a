import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { useStyleInfo } from '@/hooks/useStyleInfo';
import { FormStyleDataInfo } from '@/features/style_info';

function PrintForm({formData,onChange}:FormStyleDataInfo) {

  const items = [{
    label: 'Screen Pr. Position',
    value: formData.pSPosition || '',
    nameData: 'pSPosition',
    onChange: onChange,
  },
    {
      label: 'Screen Pr. Printer',
      value: formData.pSPrinter || '',
      nameData: 'pSPrinter',
      onChange: onChange,
    },
    {
      label: 'Screen Pr. Fabric Item/PartNo',
      value: formData.pSItem || '',
      nameData: 'pSItem',
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
          {items.map((item,index)=>(
            <Grid key={index} item xs={12} md={3}>
              <InputField
                onChange={item.onChange}
                fullWidth={true}
                id={item.nameData}
                name={item.nameData}
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

export default PrintForm;