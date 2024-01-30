import { Detail } from '../components/details';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const actions = [
  { id: 'KindIssueWeek', icon: <RemoveRedEyeIcon />, name: 'Kind issue (Weekly/Month)' },
  { id: 'KindIssue', icon: <RemoveRedEyeIcon />, name: 'Kind issue' },
  { id: 'MMoreBroken', icon: <RemoveRedEyeIcon />, name: 'Machine more broken' },
  { id: 'MWiseLostTime', icon: <RemoveRedEyeIcon />, name: 'Machine wise lost time' },
];

export const Details = () => {
  const handleTabClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
        sx={{
          height: 320,
          transform: 'translateZ(0px)',
          flexGrow: 1,
          position: 'fixed',
          bottom: 40,
          left: 4,
          zIndex: 10000,
        }}
      >
        <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleTabClick(action.id)}
              sx={{ backgroundColor: '#756AB6' }}
            />
          ))}
        </SpeedDial>
      </Box>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          width: '91.55vw',
          margin: '0 auto',
        }}
      >
        <Detail item="MWiseLostTime" />
        <Detail item="MMoreBroken" />
        <Detail item="KindIssue" />
        <Detail item="KindIssueWeek" />
      </section>
    </>
  );
};
