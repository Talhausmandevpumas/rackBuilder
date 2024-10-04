import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import goldMedal from '/assets/img/medals/goldMedal.png';
import silverMedal from '/assets/img/medals/silverMedal.png';
import bronzeMedal from '/assets/img/medals/bronzeMedal.png';


const RackMedalPreview = ({ medalType, rackNumber }) => {
    let medalImage;
  
    switch (medalType) {
      case 'gold':
        medalImage = goldMedal;
        break;
      case 'silver':
        medalImage = silverMedal;
        break;
      case 'bronze':
        medalImage = bronzeMedal;
        break;
      default:
        medalImage = null;
    }
  
    return (
      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
        {medalImage && (
          <img
            src={medalImage}
            alt={`${medalType} medal`}
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
        )}
        <span>{`Rack ${rackNumber}: ${medalType} medal`}</span>
        <AddIcon style={{ marginLeft: 'auto' }} />
      </div>
    );
  };

  const MedalRacks = () => {
    const medalRackData = [
      { medalType: 'gold', rackNumber: 1 },
      { medalType: 'silver', rackNumber: 2 },
      { medalType: 'bronze', rackNumber: 3 },
    ];
  
    return (
      <div>
        {medalRackData.map((rack, index) => (
          <RackMedalPreview
            key={index}
            medalType={rack.medalType}
            rackNumber={rack.rackNumber}
          />
        ))}
      </div>
    );
  };
  
  export default MedalRacks;
  