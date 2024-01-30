import React, { useEffect } from 'react';
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium';
import { formatDate } from '@/utils/format';
import { Box } from '@mui/material';
import { useState } from 'react';
import { CustomToolbar } from '../CustomToolbar';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import { keyframes } from '@mui/system';
import { useDownTimeOverView } from '@/hooks/useDownTimeOverView';

const useStyles = makeStyles({
  root: {
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-columnHeader': {
      borderRight: '1px solid #e4e4e4 !important',
      // backgroundColor: '#6895D2 !important',
      backgroundColor: '#8294C4 !important',
    },
    '& .MuiDataGrid-cell': {
      borderRight: '1px solid #e4e4e4 !important',
    },
    '& .MuiDataGrid-root': {
      userSelect: 'none',
    },
    '& .MuiDataGrid-row': {
      cursor: 'pointer',
    },
  },
});

export const Summary: React.FunctionComponent<{}> = () => {
  const classes = useStyles();

  const apiRef = useGridApiRef();

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 15 });
  const [totalElements, setTotalElements] = useState<number>(0);

  const [searchedData, setSearchedData] = useState<{}>({});

  const [columns, setColumns] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [statusNotFound, setStatusNotFound] = useState<boolean>(false);

  const { downTimeData, loading } = useDownTimeOverView({ ...paginationModel, ...searchedData });

  const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(77%)
  }
  20% {
    opacity: 0;
    transform: translateY(47%)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
  `;

  useEffect(() => {
    if (downTimeData && downTimeData.headers && downTimeData.contents) {
      if (downTimeData.contents.totalElements === 0) {
        setStatusNotFound(true);
        setTotalElements(0);
        setColumns([]);
        return setRows([]);
      }

      // columns

      const columnsData = downTimeData.headers?.map((column: any) => {
        const formattedColumn = column
          .split(/(?=[A-Z])/)
          .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return {
          field: column,
          headerName: formattedColumn,
          minWidth: 100,
          maxWidth: 600,
          flex: 1,
        };
      });

      const idColumn = {
        field: 'id',
        headerName: 'No.',
        width: 50,
        maxWidth: 100,
        align: 'center',
      };

      setColumns([idColumn, ...columnsData]);

      const totalEls = Number(downTimeData.contents.totalElements);

      setTotalElements(totalEls);

      // rows

      const rowsData = downTimeData.contents.dataList?.map((row: any, index: number) => {
        const formattedDate = formatDate(row.date);
        const pageSize = paginationModel.pageSize;
        const currentPage = paginationModel.page;
        return {
          id: index + 1 + currentPage * pageSize,
          ...row,
          Date: formattedDate,
        };
      });
      setRows(rowsData);
    }
  }, [downTimeData, paginationModel]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setStatusNotFound(false);
  };

  return (
    <>
      <Snackbar
        open={statusNotFound}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Not Found"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key={'topcenter'}
      />
      <Box sx={{ height: '100%', width: '100%', animation: `${fadeIn} 1.5s ease-in-out` }}>
        <div className={classes.root}>
          <DataGridPremium
            rows={rows}
            columns={columns}
            rowCount={totalElements}
            apiRef={apiRef}
            disableRowSelectionOnClick
            pagination
            loading={loading}
            paginationMode="server"
            paginationModel={paginationModel}
            pageSizeOptions={[15, 45, 100]}
            onPaginationModelChange={(model) => {
              setPaginationModel((pre) => {
                return {
                  ...pre,
                  page: model.page,
                  pageSize: model.pageSize,
                };
              });
            }}
            slots={{ toolbar: CustomToolbar }}
            slotProps={{ toolbar: { sendSearchedData: setSearchedData, id: 'summary' } }}
          />
        </div>
      </Box>
    </>
  );
};
