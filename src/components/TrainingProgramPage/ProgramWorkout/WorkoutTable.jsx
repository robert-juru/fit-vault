import * as React from "react";
import styles from "./programWorkout.module.scss";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function WorkoutTable({ program }) {
  // if (!program.programStructure) return <p>No workout data available</p>;
  console.log(program);
  return (
    <>
      <h2 className={styles.workoutNameHeader}>{program[0].name}</h2>
      <TableContainer sx={{ width: 4 / 5, marginBottom: 4 }} component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
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
            {program.slice(1).map((ex, index) => (
              <StyledTableRow key={ex.name}>
                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {ex.exercise.name}
                </StyledTableCell>
                <StyledTableCell align="right">{ex.sets}</StyledTableCell>
                <StyledTableCell align="right">{ex.reps}</StyledTableCell>
                <StyledTableCell align="right">{ex.intensity}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
