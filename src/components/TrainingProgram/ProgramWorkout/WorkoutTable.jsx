import * as React from 'react';
import styles from './programWorkout.module.scss';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(exerciseName, sets, reps, intensity) {
  return { exerciseName, sets, reps, intensity };
}

const rows = [
  createData('Barbell Bench Press', 3, '6-8', 'RPE 8'),
  createData('Incline DB Press', 3, '8-12', 'RPE 9'),
  createData('Weighted Chin-ups', 3, '6-8', 'RPE 8'),
  createData('Barbell Row', 3, '8-12', 'RPE 9'),
  createData('Seated DB Curls', 3, '12-15', 'RPE 10'),
];

export default function WorkoutTable() {
  return (
    <>
    <h2 className={styles.workoutNameHeader}>Workout A - Upper Body</h2>
    <TableContainer sx={{width:4/5, marginBottom:4}} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">#</StyledTableCell>
            <StyledTableCell>Exercise</StyledTableCell>
            <StyledTableCell align="right">Sets</StyledTableCell>
            <StyledTableCell align="right">Reps</StyledTableCell>
            <StyledTableCell align="right">Intensity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.exerciseName}>
              <StyledTableCell align="center">1</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.exerciseName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sets}</StyledTableCell>
              <StyledTableCell align="right">{row.reps}</StyledTableCell>
              <StyledTableCell align="right">{row.intensity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}