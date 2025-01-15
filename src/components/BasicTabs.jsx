/* 
 * BasicTabsComponent is a React component that renders a set of tabs using Material-UI components.
 * It allows navigation between different routes based on the selected tab.
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box as JBox } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function BasicTabsComponent(props) {
  const { tabs } = props;

  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newTabIndex) => {
    event.preventDefault(); // Prevent default anchor behavior
    setValue(newTabIndex); // Update the state with the new tab index
    navigate(tabs[newTabIndex].url, { replace: true }); // Navigate to the URL of the selected tab
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

BasicTabsComponent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};