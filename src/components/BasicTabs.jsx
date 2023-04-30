import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box as JBox } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function BasicTabs(props) {
  const { tabs } = props;

  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newTabIndex) => {
    event.preventDefault();
    setValue(newTabIndex);
    navigate(tabs[newTabIndex].url, { replace: true });
  };

  return (
    <JBox
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <JBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.url}
              label={tabs[index].title}
              id={`simple-tab-${index}`}
              aria-controls={`simple-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </JBox>
    </JBox>
  );
}
