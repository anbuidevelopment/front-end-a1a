import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { FormStyleDataInfo } from '@/features/style_info';

function EmbForm({formData,onChange}:FormStyleDataInfo) {

  const items=[
    {
      label: 'EMB Position',
      value: formData.embPosition || '',
      nameData: 'embPosition',
      onChange: onChange,
    },
    {
      label: 'EMB Badge Logo',
      value: formData.embBadgeLogo || '',
      nameData: 'embBadgeLogo',
      onChange: onChange,
    },
    {
      label: 'EMB Total Stitch',
      value: formData.embTotalStitch || '',
      nameData: 'embTotalStitch',
      onChange: onChange,
    },
    {
      label: 'EMB Total SMV',
      value: formData.embTotalSMV || '',
      nameData: 'embTotalSMV',
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

export default EmbForm;