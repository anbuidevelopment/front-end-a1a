import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { useStyleInfo } from '@/hooks/useStyleInfo';
import { FormStyleDataInfo } from '@/features/style_info';
import { splitItem, splitItemJoin } from '@/utils/format';

function PrintForm({formData,onChange}:FormStyleDataInfo) {

  const items = [{
    label: 'Screen Pr. Position',
    value: formData.screenPrintPosition || '',
    nameData: 'screenPrintPosition',
    type:'number',
    onChange: onChange,
    multi:false
  },
    {
      label: 'Screen Pr. Printer',
      value: formData.screenPrintPrinter || '',
      nameData: 'screenPrintPrinter',
      type:'text',
      onChange: onChange,
      multi:false
    },
    {
      label: 'Screen Pr. Fabric Item/PartNo',
      value: formData.screenPrintItem || '',
      nameData: 'screenPrintItem',
      type:'text',
      onChange: onChange,
      multi:true
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
                type={item.type}
                id={item.nameData}
                name={item.nameData}
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

export default PrintForm;