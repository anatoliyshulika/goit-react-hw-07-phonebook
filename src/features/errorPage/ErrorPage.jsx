import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { selectError } from 'app/selectors';

const primary = purple[500]; // #f44336

export default function ErrorPage() {
  const error = useSelector(selectError);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        {error.status}
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        {error.statusText}
      </Typography>
      {/* <Button variant="contained">Back Home</Button> */}
    </Box>
  );
}
