import React, { useState } from 'react';
import { Box, Button, Typography, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import goldMedal from '/assets/img/medals/goldMedal.png';
import silverMedal from '/assets/img/medals/silverMedal.png';
import bronzeMedal from '/assets/img/medals/bronzeMedal.png';
const PreviewAndCustomize = ({ selectedAward, onAddToRack }) => {
  const [silverOak, setSilverOak] = useState(0);
  const [bronzeOak, setBronzeOak] = useState(0);

  const handleSilverIncrease = () => setSilverOak(silverOak + 1);
  const handleSilverDecrease = () => setSilverOak(Math.max(0, silverOak - 1));

  const handleBronzeIncrease = () => setBronzeOak(bronzeOak + 1);
  const handleBronzeDecrease = () => setBronzeOak(Math.max(0, bronzeOak - 1));

  if (!selectedAward) {
    return <Typography>Select an award to customize</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6">{selectedAward.name}</Typography>
      <Typography>Add Your Devices</Typography>
      <Grid container spacing={2}>
        {/* Silver Oak Leaf Cluster */}
        <Grid item>
          <Typography>Silver Oak Leaf Clusters</Typography>
          <Box display="flex" alignItems="center">
            <img
              src={silverMedal}
              alt="Silver Oak Leaf Cluster"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <IconButton onClick={handleSilverDecrease}>
              <RemoveIcon />
            </IconButton>
            <Typography>{silverOak}</Typography>
            <IconButton onClick={handleSilverIncrease}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Bronze Oak Leaf Cluster */}
        <Grid item>
          <Typography>Bronze Oak Leaf Clusters</Typography>
          <Box display="flex" alignItems="center">
            <img
              src={bronzeMedal}
              alt="Bronze Oak Leaf Cluster"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <IconButton onClick={handleBronzeDecrease}>
              <RemoveIcon />
            </IconButton>
            <Typography>{bronzeOak}</Typography>
            <IconButton onClick={handleBronzeIncrease}>
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      
      {/* Add to Rack Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => onAddToRack(selectedAward, silverOak, bronzeOak)}
        style={{ marginTop: '20px' }}
      >
        Add to Rack
      </Button>
    </Box>
  );
};

export default PreviewAndCustomize;
