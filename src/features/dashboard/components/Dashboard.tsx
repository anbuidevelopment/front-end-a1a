import { useState } from 'react';
import { GridDataGetOverViewInfo, StyleDetailInfo } from '../types';
import { DataGrid, GridRowModel, GridRowSelectionModel } from '@mui/x-data-grid';
import { Button, CircularProgress, Paper } from '@mui/material';
import { CustomToolbar } from '@/features/dashboard/components/CustomToolbar';
import { MuiDialog } from '@/components/Elements';
import { StyleInfoForm } from '@/features/style_info/components/StyleInfoForm';
import { useStyleDetail } from '@/hooks/useStyleDetail';

export const DashBoardFilter = ({
                                  paramsGrid,
                                  paginationModelOnChange,
                                  gridDataInfo,
                                  handleSetParamsSearch,
                                  handleSetParamsStyleDetail,
                                  styleDetailDto,
                                }: GridDataGetOverViewInfo) => {
  //const {styleDetailDto}=useStyleDetail()
  const [selectedIds, setSelectedIds] = useState<any>([]);
  const [deleteStatus, setDeleteStatus] = useState<boolean>(true);
  const [isDialog, setIsDialog] = useState<boolean>(false);

  function handleClick() {
    console.log(gridDataInfo.rows);
  }

  const handleDoubleClick = (rowSelectionModel: GridRowModel) => {
    handleSetParamsStyleDetail(rowSelectionModel.row.styleMasterId);
    setIsDialog(true);
  };

  return (
    <Paper
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: 100,
        marginTop: 4,
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold',
        },
        '& .col-header': {
          backgroundColor: '#3C7363',
          color: 'white',
        },
      }}
    >
      <Button onClick={handleClick}>Click</Button>
      {gridDataInfo.rows.length > 0 ? (
        <DataGrid
          sx={{
            fontWeight:'bold'
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                orderNo: false,
              },
            },
          }}
          className={'h-[512px]'}
          getRowId={(row) => row.id}
          pageSizeOptions={[10, 25, 50]}
          paginationMode={'server'}
          paginationModel={{ page: paramsGrid.pPageIndex, pageSize: paramsGrid.pPageSize }}
          onPaginationModelChange={paginationModelOnChange}
          columns={gridDataInfo.columns.filter((column) => !column.hideable)}
          rowCount={gridDataInfo.totalElements || 0}
          rows={gridDataInfo.rows}
          slots={{ toolbar: CustomToolbar }}
          slotProps={{
            toolbar: {
              deleteStatus: deleteStatus,
              idDelete: selectedIds,
              handleSetParamsSearch: handleSetParamsSearch,
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(rowSelectionModel) => {
            const selectedRows = rowSelectionModel.map((rowId) => {
              return gridDataInfo.rows.find((row) => row.id === rowId);
            });
            setSelectedIds(selectedRows);
            rowSelectionModel.length > 0 ? setDeleteStatus(false) : setDeleteStatus(true);
          }}
          onRowDoubleClick={(rowSelectionModel: GridRowModel) => handleDoubleClick(rowSelectionModel)}
        />
      ) : (
        <div className={'w-full h-48 flex justify-center items-center'}>
          <CircularProgress style={{}} />
        </div>
      )}
      <MuiDialog percentScreen={'75%'} open={isDialog} setOpen={setIsDialog} title={'Style Master Description'}
                 content={<StyleInfoForm styleDetailDto={styleDetailDto} />} />
    </Paper>
  );
};