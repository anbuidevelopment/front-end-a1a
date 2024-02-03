import { Card, CardContent, Grid } from '@mui/material';
import { AutoCompleteMui } from '@/features/style_info/components/AutoComplete/AutoComplete';
import { FormStyleDataInfoAutoComplete } from '@/features/style_info';
import { storageFilter } from '@/utils/storage';

export const StyleForm = ({ formData, onChange,action }: FormStyleDataInfoAutoComplete) => {
  const items = [
    {
      name: 'Style Master Code',
      id: 'styleMasterCode',
      value: formData.styleMasterCode || null || undefined,
      options: storageFilter.getData('StyleMasterCode'),
      onChange: onChange,
      disable: action===2 ? true : false
    },
    {
      name: 'Stage',
      id: 'stage',
      value: formData.stage || null || undefined,
      options: storageFilter.getData('Stage'),
      onChange: onChange,
      disable: action===2 ? true : false
    },
    {
      name: 'Customer Code',
      id: 'customerCode',
      value: formData.customerCode || null || undefined,
      options: storageFilter.getData('CustomerCode'),
      onChange: onChange,
      disable: false
    },
    {
      name: 'Customer Pattern Code',
      id: 'customerPatternCode',
      value: formData.customerPatternCode || null || undefined,
      options: storageFilter.getData('CustomerPatternCode'),
      onChange: onChange,
      disable: false
    },
    {
      name: 'A1A Route Number',
      id: 'a1aRouteNumber',
      value: formData.a1aRouteNumber || null || undefined,
      options: storageFilter.getData('A1ARouteNumber'),
      onChange: onChange,
      disable: false
    },
    {
      name: 'Product Type',
      id: 'productType',
      value: formData.productType || null || undefined,
      options: storageFilter.getData('ProductType'),
      onChange: onChange,
      disable: false
    },
    {
      name: 'Factory Allocation',
      id: 'factoryAllocation',
      value: formData.factoryAllocation || null || undefined,
      options: storageFilter.getData('FactoryAllocation'),
      onChange: onChange,
      disable: false
    },
    {
      name: 'Mer Account Name',
      id: 'merAccountName',
      value: formData.merAccountName || null || undefined,
      options: storageFilter.getData('MerAccountName'),
      onChange: onChange,
      disable: false
    },
    {
      name: 'Status',
      id: 'status',
      value: formData.status || null || undefined,
      options: storageFilter.getData('Status'),
      onChange: onChange,
      disable: false
    },
    {
      name: 'Season',
      id: 'season',
      value: formData.season || null || undefined,
      options: storageFilter.getData('Season'),
      onChange: onChange,
      disable: action===2 ? true : false
    },
    {
      name: 'Options',
      id: 'optionNo',
      value: formData.optionNo || null || undefined,
      options: storageFilter.getData('OptionNo'),
      onChange: onChange,
      disable: action===2 ? true : false
    },
    {
      name: 'Tac Route Number',
      id: 'tacRouteNumber',
      value: formData.tacRouteNumber || null || undefined,
      options: storageFilter.getData('TACRouteNumber'),
      onChange: onChange,
      disable: false
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
                  disabled={item.disable}
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