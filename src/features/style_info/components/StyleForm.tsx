import { Card, CardContent, Grid } from '@mui/material';
import { AutoCompleteMui } from '@/features/style_info/components/AutoComplete/AutoComplete';
import { FormStyleDataInfoAutoComplete, FormStyleDetailDto } from '@/features/style_info';
import { storageFilter } from '@/utils/storage';

export const StyleForm = ({ formData, onChange }: FormStyleDataInfoAutoComplete) => {
  const items = [
    {
      name: 'Style Master Code',
      id: 'styleMasterCode',
      value: formData.styleMasterCode || null || undefined,
      options: storageFilter.getData('StyleMasterCode'),
      onChange: onChange,
    },
    {
      name: 'Stage',
      id: 'stage',
      value: formData.stage || null || undefined,
      options: storageFilter.getData('Stage'),
      onChange: onChange,
    },
    {
      name: 'Customer Code',
      id: 'customerCode',
      value: formData.customerCode || null || undefined,
      options: storageFilter.getData('CustomerCode'),
      onChange: onChange,
    },
    {
      name: 'Customer Pattern Code',
      id: 'customerPatternCode',
      value: formData.customerPatternCode || null || undefined,
      options: storageFilter.getData('CustomerPatternCode'),
      onChange: onChange,
    },
    {
      name: 'A1A Route Number',
      id: 'a1aRouteNumber',
      value: formData.a1aRouteNumber || null || undefined,
      options: storageFilter.getData('A1ARouteNumber'),
      onChange: onChange,
    },
    {
      name: 'Product Type',
      id: 'productType',
      value: formData.productType || null || undefined,
      options: storageFilter.getData('ProductType'),
      onChange: onChange,
    },
    {
      name: 'Factory Allocation',
      id: 'factoryAllocation',
      value: formData.factoryAllocation || null || undefined,
      options: storageFilter.getData('FactoryAllocation'),
      onChange: onChange,
    },
    {
      name: 'Mer Account Name',
      id: 'merAccountName',
      value: formData.merAccountName || null || undefined,
      options: storageFilter.getData('MerAccountName'),
      onChange: onChange,
    },
    {
      name: 'Status',
      id: 'status',
      value: formData.status || null || undefined,
      options: storageFilter.getData('Status'),
      onChange: onChange,
    },
    {
      name: 'Season',
      id: 'season',
      value: formData.season || null || undefined,
      options: storageFilter.getData('Season'),
      onChange: onChange,
    },
    {
      name: 'Options',
      id: 'optionNo',
      value: formData.optionNo || null || undefined,
      options: storageFilter.getData('OptionNo'),
      onChange: onChange,
    },
    {
      name: 'Tac Route Number',
      id: 'tacRouteNumber',
      value: formData.tacRouteNumber || null || undefined,
      options: storageFilter.getData('TACRouteNumber'),
      onChange: onChange,
    },

  ];
  return (
    <>
      <Card>
        <CardContent>
          <Grid container
                justifyContent={'left'}
                alignItems={'stretch'}
                direction={'row'}
                spacing={2}>
            {items.map((item, index) => (
              <Grid key={index} item xs={12} md={3}>
                <AutoCompleteMui
                  onChange={item.onChange}
                  value={item.value}
                  label={item.name}
                  autoCompleteDto={item.options}
                  id={item.id}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};