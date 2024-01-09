import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import DangerousIcon from '@mui/icons-material/Dangerous';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import SummarizeIcon from '@mui/icons-material/Summarize';

type NavProps = {
  setSelected: (value: number) => void;
};

export default function Nav({ setSelected }: NavProps) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ marginBottom: '42px' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setSelected(newValue);
        }}
      >
        <BottomNavigationAction
          label="Machine wise lost time"
          icon={<RestoreIcon fontSize="medium" />}
        />
        <BottomNavigationAction
          label="Machine more broken"
          icon={<DangerousIcon fontSize="medium" />}
        />
        <BottomNavigationAction
          label="Kind of issue"
          icon={<BrokenImageIcon fontSize="medium" />}
        />
        <BottomNavigationAction
          label="Kind of issue (Weekly/Month)"
          icon={<EventRepeatIcon fontSize="medium" />}
        />
        <BottomNavigationAction label="Summary" icon={<SummarizeIcon fontSize="medium" />} />
      </BottomNavigation>
    </Box>
  );
}
