import { Box, Button, ButtonGroup, Card, CardContent, Grid, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useEffect, useState } from 'react';
import { InputField } from '@/components/Form';
import { useSnackbar } from 'notistack';
import SamForm from '@/features/style_info/components/SamForm';
import SubForm from '@/features/style_info/components/SubForm';
import PrintForm from '@/features/style_info/components/PrintForm';
import EmbForm from '@/features/style_info/components/EmbForm';
import HeatForm from '@/features/style_info/components/HeatForm';
import PadPrintForm from '@/features/style_info/components/PadPrintForm';
import BondForm from '@/features/style_info/components/BondForm';
import { useStyleInfo } from '@/hooks/useStyleInfo';
import { StyleForm } from '@/features/style_info/components/StyleForm';
import { FormStyleDetailDto } from '@/features/style_info';
import { StyleDetailInfo } from '@/features/dashboard/types';

export const StyleInfoForm = ({ styleDetailDto }: FormStyleDetailDto) => {

  const { enqueueSnackbar } = useSnackbar();
  const [value, onChange] = useState('1');
  const [disableBtnUpdate, setDisableBtnUpdate] = useState<boolean>(false);
  const [disableBtnAddNew, setDisableBtnAddNew] = useState<boolean>(false);

  const {
    styleInfoDataInputText,
    handleChangeInputText,
    handleChangeAutoComplete,
    styleInfoDataAutoComplete,
    handleSetAutocompleteDto,
    handleSetInputTextDto,
  } = useStyleInfo();

  useEffect(() => {
    if (styleDetailDto) {
      handleSetAutocompleteDto(styleDetailDto);
      handleSetInputTextDto(styleDetailDto);
    }
  }, [styleDetailDto]);

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };

  const handleClickUpdate = (e: React.SyntheticEvent) => {
    console.log(styleInfoDataInputText);
    console.log(styleInfoDataAutoComplete);

  };

  const handleClickAddNew = (e: React.SyntheticEvent) => {
    setDisableBtnAddNew(true);
    setTimeout(function() {
      setDisableBtnAddNew(false);
    }, 5000);
    enqueueSnackbar('Add new', { variant: 'success', anchorOrigin: { vertical: 'bottom', horizontal: 'right' } });
  };

  return (
    <Grid container
          justifyContent={'left'}
          alignItems={'stretch'}
          direction={'row'}
          spacing={2}>
      <Grid item xs={12} md={12}>
        <StyleForm formData={styleInfoDataAutoComplete} onChange={handleChangeAutoComplete} />
      </Grid>
      <Grid item xs={12} md={12}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label='Tab MasterItem'>
                <Tab label='SAM' value='1' />
                <Tab label='Printing' value='2' />
                <Tab label='Embroidery' value='3' />
                <Tab label='Heat Transfer' value='4' />
                <Tab label='Bonding' value='5' />
                <Tab label='Pad print' value='6' />
                <Tab label='Sub' value='7' />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <SamForm formData={styleInfoDataInputText} onChange={handleChangeInputText} />
            </TabPanel>
            <TabPanel value='2'>
              <PrintForm formData={styleInfoDataInputText} onChange={handleChangeInputText} />
            </TabPanel>
            <TabPanel value='3'>
              <EmbForm formData={styleInfoDataInputText} onChange={handleChangeInputText} />
            </TabPanel>
            <TabPanel value='4'>
              <HeatForm formData={styleInfoDataInputText} onChange={handleChangeInputText} />
            </TabPanel>
            <TabPanel value='5'>
              <BondForm formData={styleInfoDataInputText} onChange={handleChangeInputText} />
            </TabPanel>
            <TabPanel value='6'>
              <PadPrintForm formData={styleInfoDataInputText} onChange={handleChangeInputText} />
            </TabPanel>
            <TabPanel value='7'>
              <SubForm formData={styleInfoDataInputText} onChange={handleChangeInputText} />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
      <Grid item xs={12} md={12} sx={{ position: 'fixed', bottom: '8px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <ButtonGroup aria-label='small button group'>
            <Button variant={'outlined'} onClick={handleClickUpdate}
                    disabled={disableBtnUpdate}>Update</Button>
            <Button variant={'outlined'} onClick={handleClickAddNew} disabled={disableBtnAddNew}>Add
              new</Button>
          </ButtonGroup>

        </Box>
      </Grid>
    </Grid>
  );
};