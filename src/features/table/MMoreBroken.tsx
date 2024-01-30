// MMoreBroken

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
  id: 'no' | 'machine_type' | 'serial_number' | 'key' | 'desc_broken' | 'lost_time';
  label: string;
  minWidth?: number;
  // align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'no', label: 'No', minWidth: 100 },
  { id: 'machine_type', label: 'Machine Type', minWidth: 200 },
  {
    id: 'serial_number',
    label: 'Serial Number',
    minWidth: 200,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'key',
    label: 'Key',
    minWidth: 200,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'desc_broken',
    label: 'Description broken',
    minWidth: 200,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'lost_time',
    label: 'Lost Time',
    minWidth: 200,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  no: number;
  machine_type: string;
  serial_number: number;
  key: string;
  desc_broken: string;
  lost_time: number;
}

function createData(
  no: number,
  machine_type: string,
  serial_number: number,
  key: string,
  desc_broken: string,
  lost_time: number
): Data {
  // const density = population / size;
  return { no, machine_type, serial_number, key, desc_broken, lost_time };
}

const rows = [
  createData(1, 'IN', 13241, 'gyuwf', 'hbhufasbf ihdsaifha', 767),
  createData(2, 'CN', 140350, 'gyuwf', 'hbhufasbf ihdsaifha', 767),
  createData(3, 'IT', 6048, 'gyuwf', 'hbhufasbf ihdsaifha', 767),
  createData(4, 'US', 32716, 'gyuwf', 'hbhufasbf ihdsaifha', 767),
];

export function MMoreBroken() {
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