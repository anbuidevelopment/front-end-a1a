import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { FormStyleDataInfo } from '@/features/style_info';

function SubForm({ formData,onChange  }: FormStyleDataInfo) {
  const items = [
    {
      label: 'Sublimation Position',
      value: formData.pSPosition || '',
      nameData: 'pSPosition',
      onChange: onChange,
    },
    {
      label: 'Sublimation Printer',
      value: formData.pSPrinter || '',
      nameData: 'pSPrinter',
      onChange: onChange,
    },
    {
      label: 'Sublimation Fabric Item/PartNo',
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
          {items.map((item, index) => (
            <Grid key={index} item xs={12} md={3}>
              <InputField
                fullWidth={true}
                id={item.nameData}
                name={item.nameData}
                label={item.label}
                value={item.value}
                onChange={item.onChange} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SubForm;