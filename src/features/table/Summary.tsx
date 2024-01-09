// Summary

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
  id:
    | 'no'
    | 'date'
    | 'serial'
    | 'mc_type'
    | 'cur_location'
    | 'issue'
    | 'not_yet'
    | 'ongoing'
    | 'fixed'
    | 'maintenance_fix'
    | 'total_lost_time';
  label: string;
  minWidth?: number;
  status?: string;
  // align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'no', label: 'No', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 100 },
  {
    id: 'serial',
    label: 'Serial',
    minWidth: 100,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'mc_type',
    label: 'MC Type',
    minWidth: 100,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'cur_location',
    label: 'Current Location',
    minWidth: 100,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'issue',
    label: 'Issue',
    minWidth: 100,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'not_yet',
    label: 'Not Yet',
    minWidth: 50,
    status: 'not_yet',
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'ongoing',
    label: 'Ongoing',
    minWidth: 50,
    status: 'ongoing',
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'fixed',
    label: 'Fixed',
    minWidth: 50,
    status: 'fixed',
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'maintenance_fix',
    label: 'Maintenance Fix',
    minWidth: 100,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'total_lost_time',
    label: 'Total Lost Time',
    minWidth: 100,
    // align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  no: number;
  date: string;
  serial: string;
  mc_type: string;
  cur_location: string;
  issue: string;
  not_yet: boolean;
  ongoing: boolean;
  fixed: boolean;
  maintenance_fix: string;
  total_lost_time: number;
}

function createData(
  no: number,
  date: string,
  serial: string,
  mc_type: string,
  cur_location: string,
  issue: string,
  not_yet: boolean,
  ongoing: boolean,
  fixed: boolean,
  maintenance_fix: string,
  total_lost_time: number
): Data {
  // const density = population / size;
  return {
    no,
    date,
    serial,
    mc_type,
    cur_location,
    issue,
    not_yet,
    ongoing,
    fixed,
    maintenance_fix,
    total_lost_time,
  };
}

const rows = [
  createData(
    1,
    '2022-01-01',
    'ABC123',
    'TypeA',
    'LocationA',
    'IssueA',
    true,
    false,
    true,
    'fdsaf',
    13
  ),
  createData(
    2,
    '2022-01-02',
    'DEF456',
    'TypeB',
    'LocationB',
    'IssueB',
    false,
    true,
    false,
    'fdsaf',
    15
  ),
  createData(
    3,
    '2022-01-03',
    'GHI789',
    'TypeC',
    'LocationC',
    'IssueC',
    true,
    true,
    false,
    'fdsaf',
    10
  ),
  createData(
    4,
    '2022-01-04',
    'JKL012',
    'TypeD',
    'LocationD',
    'IssueD',
    false,
    false,
    true,
    'fdsaf',
    21
  ),
];

export function Summary() {
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
      <TableContainer sx={{ maxHeight: 440, scrollbarWidth: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={'center'}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    // backgroundColor: {column.status ? 'background.paper'},
                    backgroundColor:
                      column.status === 'not_yet'
                        ? '#ffff007a'
                        : column.status === 'fixed'
                          ? '#0080007d'
                          : 'inherit',
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
