import React, { useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { InputField } from '@/components/Form';
import { FormStyleDataInfo } from '@/features/style_info';
import { MuiDialog } from '@/components/Elements';
import AutoCompleteLimitTags from '@/features/style_info/components/AutoComplete/AutoCompleteMultiChoose';
import { splitItem, splitItemJoin } from '@/utils/format';

function SubForm({ formData, onChange }: FormStyleDataInfo) {

  const [open,setOpen]=useState<boolean>(false)

  const items = [
    {
      label: 'Sublimation Position',
      value: formData.sublimationPosition || '',
      nameData: 'sublimationPosition',
      type: 'number',
      onChange: onChange,
      helperText: '',
      multi: false
    },
    {
      label: 'Sublimation Printer',
      value: formData.sublimationPrinter || '',
      nameData: 'sublimationPrinter',
      type: 'text',
      onChange: onChange,
      helperText: '',
      multi:false
    },
    {
      label: 'Sublimation Fabric Item/PartNo',
      value: formData.screenSublimationItem || '',
      nameData: 'screenSublimationItem',
      type: 'text',
      onChange: onChange,
      helperText: '',
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
          {items.map((item, index) => (
            <Grid key={index} item xs={12} md={3}>
              <InputField
                fullWidth={true}
                type={item.type}
                id={item.nameData}
                name={item.nameData}
                label={item.label}
                value={item.multi ? splitItemJoin(item.value?.toString()):item.value}
                rows={item.multi ? splitItem(item.value?.toString()).length:1}
                onChange={item.onChange}
                onDoubleClick={item.multi ?  e=>setOpen(true) : e=>{}}
                multiline={item.multi}
                helperText={item.helperText} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      {/*<MuiDialog open={open} setOpen={setOpen} title={'Items'} percentScreen={'50%'} content={<AutoCompleteLimitTags />} buttonAccept={true} />*/}
    </Card>
  );
}

export default SubForm;