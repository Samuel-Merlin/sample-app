/*+===================================================================
Samuel Merlin RWS 
File:      App.js (Project: Learn React tutorial, part 2)

  Summary:   app so that when it opens, there are 9 cells on the screen, sort of like how the events page is set up in the wireframe

  Functions: GridOne

  GridOne()
  Simple function to form the grid of 9 cells on the screen
===================================================================+*/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  export default function GridOne() {
    return (
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(9)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Button component={Link} to="/Form">
              <Item>Click for the form!</Item>
              </Button>
            </Grid>
          ))}
        </Grid>
    );
  }