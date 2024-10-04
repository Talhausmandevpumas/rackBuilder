import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const awards = [
  { id: 1, name: 'Army Distinguished Service Cross (DSC)' },
  { id: 2, name: 'Defense Distinguished Service (DDSM)' },
  { id: 3, name: 'Army Distinguished Service (DSM)' },
];

const AwardSelection = ({ onAwardSelect }) => {
  return (
    <List>
      {awards.map((award) => (
        <ListItem
          key={award.id}
          secondaryAction={
            <IconButton edge="end" aria-label="add" onClick={() => onAwardSelect(award)}>
              <AddIcon />
            </IconButton>
          }
        >
          <ListItemText primary={award.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default AwardSelection;
