import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { useStyleInfo } from '@/hooks/useStyleInfo';
import { FormStyleDataInfo } from '@/features/style_info';

function HeatForm({formData,onChange}:FormStyleDataInfo) {

  const items=[
    {
      label: 'HT Small',
      value: formData.htSmall || '',
      nameData: 'htSmall',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'HT Big',
      value: formData.htBig || '',
      nameData: 'htBig',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'HT Total Position',
      value: formData.htTotalPosition || '',
      nameData: 'htTotalPosition',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'HT Embroidery Backing',
      value: formData.htEmbroideryBacking || '',
      nameData: 'htEmbroideryBacking',
      type:'number',
      onChange: onChange,
    },
  ]

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
              fullWidth={true}
              type={item.type}
              onChange={item.onChange}
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

export default HeatForm;