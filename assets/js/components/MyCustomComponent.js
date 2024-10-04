import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import RackBuilder from './RackBuilder';
import AwardSelection from './AwardSelection';
import PreviewAndCustomize from './PreviewAndCustomize';

const FullRackComponent = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [rack, setRack] = useState([]);

  const handleAwardSelect = (award) => {
    setSelectedAward(award);
  };

  const handleAddToRack = (award, silverOak, bronzeOak) => {
    const newItem = { ...award, silverOak, bronzeOak };
    setRack([...rack, newItem]);
    setSelectedAward(null); // Clear after adding to the rack
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <RackBuilder />
        </Grid>
        <Grid item xs={12} md={4}>
          <AwardSelection onAwardSelect={handleAwardSelect} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PreviewAndCustomize selectedAward={selectedAward} onAddToRack={handleAddToRack} />
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <h3>Rack Preview</h3>
        {rack.length === 0 ? (
          <p>No awards added yet.</p>
        ) : (
          <ul>
            {rack.map((item, index) => (
              <li key={index}>
                {item.name} - Silver Oak: {item.silverOak}, Bronze Oak: {item.bronzeOak}
              </li>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  );
};

export default FullRackComponent;
