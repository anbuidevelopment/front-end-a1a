import { Box, Button, ButtonGroup, Grid, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useEffect, useState } from 'react';
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
import {
  FormStyleDetailDto,
  StyleMasterConfigData,
} from '@/features/style_info';
import { UpdateRequestDto } from '@/features/style_info/api/update';
import { useUser } from '@/lib/auth';
import { UpdateSharp } from '@mui/icons-material';
import { customStyles } from '@/utils/format';


export const StyleInfoForm = ({ styleDetailDto, action }: FormStyleDetailDto) => {

  const { enqueueSnackbar } = useSnackbar();
  const [value, onChange] = useState('1');

  const {
    styleInfoDataInputText,
    handleChangeInputText,
    handleChangeAutoComplete,
    styleInfoDataAutoComplete,
    handleSetAutocompleteDto,
    handleSetInputTextDto,
  } = useStyleInfo();

  const user = useUser();

  useEffect(() => {
    if (styleDetailDto) {
      handleSetAutocompleteDto(styleDetailDto);
      handleSetInputTextDto(styleDetailDto);
    }
  }, [styleDetailDto]);

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    onChange(newValue);
  };
  const updateStyleConfigData: StyleMasterConfigData[] = [
    {
      styleMasterId: styleInfoDataAutoComplete.styleMasterId?.value,
      styleMasterCode: styleInfoDataAutoComplete.styleMasterCode?.value,
      season: styleInfoDataAutoComplete.season?.value,
      stage: styleInfoDataAutoComplete.stage?.value,
      optionNo: styleInfoDataAutoComplete.optionNo?.value,
      customerCode: styleInfoDataAutoComplete.customerCode?.value,
      customerPatternCode: styleInfoDataAutoComplete.customerPatternCode?.value,
      tacRouteNumber: styleInfoDataAutoComplete.tacRouteNumber?.value,
      a1aRouteNumber: styleInfoDataAutoComplete.a1aRouteNumber?.value,
      productType: styleInfoDataAutoComplete.productType?.value,
      factoryAllocation: styleInfoDataAutoComplete.factoryAllocation?.value,
      merAccountName: styleInfoDataAutoComplete.merAccountName?.value,
      status: styleInfoDataAutoComplete.status?.value,
      cuttingSMV: styleInfoDataInputText.cuttingSMV,
      sewing: styleInfoDataInputText.sewing,
      inspect: styleInfoDataInputText.inspect,
      press: styleInfoDataInputText.press,
      finishing: styleInfoDataInputText.finishing,
      totalSIPFSMV: styleInfoDataInputText.totalSIPFSMV,
      bondingProcess: styleInfoDataInputText.bondingProcess,
      bondingPosition: styleInfoDataInputText.bondingPosition,
      bondingTotalSMV: styleInfoDataInputText.bondingTotalSMV,
      laserPosition: styleInfoDataInputText.laserPosition,
      laserTotalSMV: styleInfoDataInputText.laserTotalSMV,
      totalBondingSMV: styleInfoDataInputText.totalBondingSMV,
      htSmall: styleInfoDataInputText.htSmall,
      htBig: styleInfoDataInputText.htBig,
      htTotalPosition: styleInfoDataInputText.htTotalPosition,
      htEmbroideryBacking: styleInfoDataInputText.htEmbroideryBacking,
      embPosition: styleInfoDataInputText.embPosition,
      embBadgeLogo: styleInfoDataInputText.embBadgeLogo,
      embTotalStitch: styleInfoDataInputText.embTotalStitch,
      embTotalSMV: styleInfoDataInputText.embTotalSMV,
      padPrintPosition: styleInfoDataInputText.padPrintPosition,
      padPrintTotalSMV: styleInfoDataInputText.padPrintTotalSMV,
      screenPrintPosition: styleInfoDataInputText.screenPrintPosition,
      screenPrintPrinter: styleInfoDataInputText.screenPrintPrinter,
      sublimationPosition: styleInfoDataInputText.sublimationPosition,
      sublimationPrinter: styleInfoDataInputText.sublimationPrinter,
      refStyleMasterId: Number(styleInfoDataAutoComplete.styleMasterId?.value),
      isActive: 1,
      styleMasterBondingItem: styleInfoDataInputText.bondingItem?.replace(/\n/g, '|').replace(/^\||\|$/g, ''),
      styleMasterScreenSublimationItem: styleInfoDataInputText.screenSublimationItem?.replace(/\n/g, '|').replace(/^\||\|$/g, ''),
      styleMasterScreenPrintItem: styleInfoDataInputText.screenPrintItem?.replace(/\n/g, '|').replace(/^\||\|$/g, ''),
    },
  ];
  const params: UpdateRequestDto = {
    pAction: action,
    pCreatedBy: user.data?.id != null ? user.data.id : 1,
    pOutput: 1,
  };
  const handleClickUpdate = async (e: React.SyntheticEvent) => {

    console.log('params:', params);
    console.log('request', updateStyleConfigData);
    // const response = await updateStyleMaster(params, updateStyleConfigData)
    // console.log(response.message)
    enqueueSnackbar(action === 2 ? 'Update Complete' : 'Insert Complete', {
      variant: 'success',
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    });
  };

  return (
    <Grid container
          sx={{height:'100%'}}
          justifyContent={'left'}
          alignItems={'stretch'}
          direction={'row'}
          spacing={2}>

      <Grid item xs={12} md={12}>
        <StyleForm formData={styleInfoDataAutoComplete} onChange={handleChangeAutoComplete} action={action} />
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
      <Grid item xs={12} md={1} sx={{textAlign:'left'}}>
        <Button
          fullWidth
          startIcon={<UpdateSharp />}
          onClick={handleClickUpdate}>Save</Button>
      </Grid>
    </Grid>
  );
};