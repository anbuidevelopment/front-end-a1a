import { useState } from 'react';
import { convertToTitleCase, GridDataGetOverViewInfo } from '../types';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { CustomToolbar } from '@/features/dashboard/components/CustomToolbar';
import { MuiDialog } from '@/components/Elements';
import { StyleInfoForm } from '@/features/style_info/components/StyleInfoForm';
import { customStyles } from '@/utils/format';

export const DashboardFilter = ({
                                  paramsGrid,
                                  paginationModelOnChange,
                                  gridDataInfo,
                                  handleSetParamsSearch,
                                  handleSetParamsStyleDetail,
                                  styleDetailDto,
                                  dashBoardDto,
                                }: GridDataGetOverViewInfo) => {
  //const {styleDetailDto}=useStyleDetail()
  const [selectedIds, setSelectedIds] = useState<any>([]);
  const [deleteStatus, setDeleteStatus] = useState<boolean>(true);
  const [isDialog, setIsDialog] = useState<boolean>(false);

  function handleClickEdit(row: any) {
    handleSetParamsStyleDetail(row.row.styleMasterId);
    setIsDialog(true);
  }

  function handleClickAdd(row: any) {
    handleSetParamsStyleDetail(row.row.styleMasterId);
    setIsDialog(true);
  }

  function handleClickDelete(row: any) {
    handleSetParamsStyleDetail(row.row.styleMasterId);
    // setIsDialog(true);
  }

  const columnsHeader: GridColDef[] = [
    ...(dashBoardDto?.headers || [
      'styleMasterCode',
      'season',
      'stage',
      'optionNo',
      'tacRouteNumber',
      'a1aRouteNumber',
      'productType',
      'factoryAllocation',
      'merAccountName',
      'createdDate']).map((header) => ({
      field: header,
      headerName: convertToTitleCase(header),
      width:
        header === 'styleMasterId' || header === 'season' || header === 'stage' || header === 'optionNo'
          ? 130
          : header === 'tacRouteNumber' || header === 'a1aRouteNumber' || header === 'factoryAllocation'
            ? 160
            : 220,
      headerClassName: 'col-header',
      renderCell: (params: any) => (
        <>
          {params.colDef.field === 'createdDate'
            ? new Date(params.value).toISOString().replace('T', ' ').substring(0, 19)
            : params.value}
        </>
      ),
      hideable: header === 'id' || header === 'status' || header === 'totalRowNum' || header === 'styleMasterId',
    })),
  ];

  columnsHeader.slice(0,5).forEach((column)=>{
    column.pinnable=true
  })


  return (
    <Paper
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: 100,
        marginTop: 4,
        display: 'grid',
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'normal',
        },
        '& .col-header': {
          backgroundColor: customStyles['colorTableHeader']
        },
        '& .MuiDataGrid-columnHeader': {
          backgroundColor: customStyles['colorTableHeader']
        },
        '& .MuiCheckbox-root': {
          color: customStyles['colorIcon'],
          '&.Mui-checked': {
            color: customStyles['colorIcon'],
          },
        },

      }}
    >
      {/*{gridDataInfo.rows.length > 0 ? (*/}
        <DataGrid
          initialState={{
            columns: {
              columnVisibilityModel: {
                orderNo: true,
              },
            },
          }}
          getRowId={(row) => row.id}
          pageSizeOptions={[10, 25, 50]}
          paginationMode={'server'}
          paginationModel={{ page: paramsGrid.pPageIndex, pageSize: paramsGrid.pPageSize }}
          onPaginationModelChange={paginationModelOnChange}
          columns={columnsHeader.filter((column) => !column.hideable)}
          rowCount={gridDataInfo.totalElements || 0}
          rows={gridDataInfo.rows}
          slots={{ toolbar: CustomToolbar }}
          slotProps={{
            toolbar: {
              deleteStatus: deleteStatus,
              idDelete: selectedIds,
              handleSetParamsSearch: handleSetParamsSearch,
              handleSetParamsStyleDetail: handleSetParamsStyleDetail,
              styleDetailDto: styleDetailDto,
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
        />
      {/*) : (*/}
      {/*  <div className={'w-full h-48 flex justify-center items-center'}>*/}
      {/*    <CircularProgress style={{}} />*/}
      {/*  </div>*/}
      {/*)}*/}
      <MuiDialog percentScreenWidth={'75%'} percentScreenHeight={'75%'} open={isDialog} setOpen={setIsDialog} title={'Style Master Description'}
                 content={<StyleInfoForm styleDetailDto={styleDetailDto} action={1}/>} />
    </Paper>
  );
};


