// KindIssue

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
  id: 'no' | 'key' | 'desc_broken' | 'lost_time';
  label: string;
  minWidth?: number;
  // align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'no', label: 'No', minWidth: 100 },

  {
    id: 'key',
    label: 'Key',
    minWidth: 200,
    // align: 'center',
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
  key: string;
  desc_broken: string;
  lost_time: number;
}

function createData(no: number, key: string, desc_broken: string, lost_time: number): Data {
  // const density = population / size;
  return { no, key, desc_broken, lost_time };
}

const rows = [
  createData(1, 'IN', 'hbhufasbf ihdsaifha', 767),
  createData(2, 'CN', 'hbhufasbf ihdsaifha', 767),
  createData(3, 'IT', 'hbhufasbf ihdsaifha', 767),
  createData(4, 'US', 'hbhufasbf ihdsaifha', 767),
];

export function KindIssue() {
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
