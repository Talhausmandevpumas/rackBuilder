import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Box, Grid, Button, Typography } from '@mui/material';

const RackBuilder = () => {
  const [branch, setBranch] = useState('Army');
  const branches = ['Army', 'Navy', 'Marines', 'USAF'];

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="branch-select-label">Choose Branch</InputLabel>
        <Select
          labelId="branch-select-label"
          id="branch-select"
          value={branch}
          label="Branch"
          onChange={handleBranchChange}
        >
          {branches.map((b) => (
            <MenuItem key={b} value={b}>
              {b}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default RackBuilder;
