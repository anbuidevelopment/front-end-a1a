// KindIssueWeek

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'no' | 'maintenance_code' | 'maintenance_name' | 'total_lost_time' | 'mc_type' | 'key_code';
  label: string;
  minWidth?: number;
  // align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'no', label: 'No', minWidth: 100 },
  { id: 'maintenance_code', label: 'Maintenance Code', minWidth: 200 },
  {
    id: 'maintenance_name',
    label: 'Maintenance Name',
    minWidth: 200,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'total_lost_time',
    label: 'Total Lost Time',
    minWidth: 200,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'mc_type',
    label: 'MC Type',
    minWidth: 200,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'key_code',
    label: 'Key Code',
    minWidth: 200,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  no: number;
  maintenance_code: string;
  maintenance_name: string;
  total_lost_time: number;
  mc_type: string;
  key_code: string;
}

function createData(
  no: number,
  maintenance_code: string,
  maintenance_name: string,
  total_lost_time: number,
  mc_type: string,
  key_code: string
): Data {
  // const density = population / size;
  return { no, maintenance_code, maintenance_name, total_lost_time, mc_type, key_code };
}

const rows = [
  createData(1, 'IN', 'fadsaff', 63546, 'hbhufasbf ihdsaifha', 'fdsfsa'),
  createData(2, 'CN', 'fadsaff', 63546, 'hbhufasbf ihdsaifha', 'fdsfsa'),
  createData(3, 'IT', 'fadsaff', 63546, 'hbhufasbf ihdsaifha', 'fdsfsa'),
  createData(4, 'US', 'fadsaff', 63546, 'hbhufasbf ihdsaifha', 'fdsfsa'),
];

export function KindIssueWeek() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: '100%',
        overflow: 'hidden',
        // marginTop: '24px',
        // paddingY: '42px',
        paddingX: '24px',
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={'center'}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    backgroundColor: 'background.paper',
                    fontWeight: 700,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={'center'}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
