import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  function FormRowOne() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Item>Uno</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Dos</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Tres</Item>
        </Grid>
      </React.Fragment>
);}

function FormRowTwo() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>One</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Two</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Three</Item>
      </Grid>
    </React.Fragment>
);}

function FormRowThree() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Ein</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Zwei</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Drei</Item>
      </Grid>
    </React.Fragment>
);}

export default function NestGird() {
  return (
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Grid container item spacing={3}>
        <FormRowOne />
        </Grid>
        <Grid container item spacing={3} >
        <FormRowTwo />
        </Grid>
        <Grid container item spacing={3} >
        <FormRowThree />
        </Grid>
      </Grid>
  )
};