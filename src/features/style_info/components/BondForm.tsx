import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { FormStyleDataInfo } from '@/features/style_info';
import { splitItem, splitItemJoin } from '@/utils/format';

function BondForm({formData,onChange}:FormStyleDataInfo) {

  const items = [
    {
      label: 'Bonding Process',
      value: formData.bondingProcess || '',
      nameData: 'bondingProcess',
      type:'text',
      onChange: onChange,
      multi:false
    },
    {
      label: 'Bonding Position',
      value: formData.bondingPosition || '',
      nameData: 'bondingPosition',
      type:'number',
      onChange: onChange,
      multi:false
    },
    {
      label: 'Bonding Total SMV',
      value: formData.bondingTotalSMV || '',
      nameData: 'bondingTotalSMV',
      type:'number',
      onChange: onChange,
      multi:false
    },
    {
      label: 'Laser Position',
      value: formData.laserPosition || '',
      nameData: 'laserPosition',
      type:'number',
      onChange: onChange,
      multi:false
    },
    {
      label: 'Laser Total SMV',
      value: formData.laserTotalSMV || '',
      nameData: 'laserTotalSMV',
      type:'number',
      onChange: onChange,
      multi:false
    },
    {
      label: 'Total Bonding SMV',
      value: formData.totalBondingSMV || '',
      nameData: 'totalBondingSMV',
      type:'number',
      onChange: onChange,
      multi:false
    },
    {
      label: 'Bonding Item',
      value: formData.bondingItem || '',
      nameData: 'bondingItem',
      type:'text',
      onChange: onChange,
      multi:true
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
                type={item.type}
                name={item.nameData}
                id={item.nameData}
                multiline={item.multi}
                value={item.multi ? splitItemJoin(item.value?.toString()):item.value}
                rows={item.multi ? splitItem(item.value?.toString()).length:1}
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