import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { useStyleInfo } from '@/hooks/useStyleInfo';
import { FormStyleDataInfo } from '@/features/style_info';

function SamForm({ formData, onChange }: FormStyleDataInfo) {

  const items = [
    {
      label: 'Cutting SMV',
      value: formData.cuttingSMV || '',
      nameData: 'cuttingSMV',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'Sewing',
      value: formData.sewing || '',
      nameData: 'sewing',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'Inspect',
      value: formData.inspect || '',
      nameData: 'inspect',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'Press',
      value: formData.press || '',
      nameData: 'press',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'Finishing',
      value: formData.finishing || '',
      nameData: 'finishing',
      type:'number',
      onChange: onChange,
    },
    {
      label: 'Total Sew IPF SMV',
      value: formData.totalSewIPFSMV || '',
      nameData: 'totalSewIPFSMV',
      type:'number',
      onChange: onChange,
    },
  ];

  return (
    <>
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
                  fullWidth={true}
                  type={item.type}
                  onChange={item.onChange}
                  label={item.label}
                  value={item.value}
                  id={item.nameData}
                  name={item.nameData} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default SamForm;