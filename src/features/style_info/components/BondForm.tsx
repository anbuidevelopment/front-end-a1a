import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { FormStyleDataInfo } from '@/features/style_info';

function BondForm({formData,onChange}:FormStyleDataInfo) {

  const items = [
    {
      label: 'Bonding Process',
      value: formData.bProcess || '',
      nameData: 'bProcess',
      onChange: onChange,
    },
    {
      label: 'Bonding Position',
      value: formData.bPosition || '',
      nameData: 'bPosition',
      onChange: onChange,
    },
    {
      label: 'Bonding Total SMV',
      value: formData.bTotalSMV || '',
      nameData: 'bTotalSMV',
      onChange: onChange,
    },
    {
      label: 'Laser Position',
      value: formData.lPosition || '',
      nameData: 'lPosition',
      onChange: onChange,
    },
    {
      label: 'Laser Total SMV',
      value: formData.lTotalSMV || '',
      nameData: 'lTotalSMV',
      onChange: onChange,
    },
    {
      label: 'Total Bonding SMV',
      value: formData.bondTotalSMV || '',
      nameData: 'bondTotalSMV',
      onChange: onChange,
    },
  ];

  return (
    <Card>
      <CardContent>
        <Grid container
              justifyContent={'left'}
              alignItems={'stretch'}
              spacing={2}
              direction={'row'}>
          {items.map((item, index) => (
            <Grid key={index} item xs={12} md={3}>
              <InputField
                fullWidth={true}
                onChange={item.onChange}
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

export default BondForm;