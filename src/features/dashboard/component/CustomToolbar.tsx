import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

import { LoaderData } from '../types';

import { Button, Grid, Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import RefreshIcon from '@mui/icons-material/Refresh';

import { executeGetFilter } from '../api/filter';

export function CustomToolbar({
  sendSearchedData,
}: {
  sendSearchedData: (loadedData: LoaderData | []) => void;
}) {
  const [data, setData] = useState<any>({});
  const [positionKeys, setPositionKeys] = useState<string[]>([]);
  const [position, setPosition] = useState<string | null>(null);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    getData()
      .then((data: any) => {
        setData(data);
        if (data && data.contents && data.contents.dataList) {
          const keys = Object.keys(data.contents.dataList[0]);
          setPositionKeys(keys);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function getData() {
    let result = await executeGetFilter();
    return result;
  }

  const handleLoadData = () => {
    let loadedData: LoaderData = {};

    if (position) {
      loadedData.position = position;
      if (location) {
        loadedData.location = location;
      }
    }

    sendSearchedData(loadedData);
  };

  const handleRefresh = () => {
    setPosition(null);
    setLocationOptions([]);
    setLocation(null);
    sendSearchedData([]);
  };

  return (
    <GridToolbarContainer>
      <Grid container justifyContent={'right'} alignItems={'stretch'} spacing={1} direction={'row'}>
        <Grid item xs={12} md={12} mt={2} ml={2}>
          <Grid
            container
            direction={'row'}
            spacing={1}
            justifyContent={'left'}
            gap={1}
            alignItems={'stretch'}
          >
            <Grid item>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={position}
                options={positionKeys}
                sx={{ width: 200 }}
                onChange={(event, newValue) => {
                  setPosition(null);
                  setLocationOptions([]);
                  setLocation(null);
                  if (newValue !== null) {
                    setPosition(newValue);
                    const selectedOptions = data.contents.dataList[0][newValue];
                    if (selectedOptions) {
                      setLocationOptions(selectedOptions);
                    }
                  }
                }}
                renderInput={(params) => <TextField {...params} label="Position" />}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={location}
                options={locationOptions}
                sx={{ width: 200 }}
                onChange={(event, newValue) => {
                  setLocation(null);
                  if (newValue !== null) {
                    setLocation(newValue);
                  }
                }}
                renderInput={(params) => <TextField {...params} label="Location" />}
              />
            </Grid>

            <Grid item xs={12} md={1.5}>
              <Button
                onClick={handleLoadData}
                sx={{ height: 55, width: 200, backgroundColor: '#D2E0FB', color: '#400D51' }}
                variant={'contained'}
                startIcon={<SearchOutlined />}
              >
                Search
              </Button>
            </Grid>
            <Grid item xs={12} md={1.5}>
              <Button
                onClick={handleRefresh}
                sx={{
                  height: 55,
                  width: 200,
                  backgroundColor: '#99BC85',
                  color: '#F4EEFF',
                  marginLeft: 3.6,
                }}
                variant={'contained'}
                startIcon={<RefreshIcon />}
              >
                Refresh
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction={'row'} gap={1.7} justifyContent={'flex-end'}>
          <GridToolbarColumnsButton sx={{ color: '#4E709D' }} />
          <GridToolbarDensitySelector sx={{ color: '#4E709D' }} />
          <GridToolbarExport sx={{ color: '#4E709D' }} />
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
}
