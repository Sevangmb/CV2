import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box as JBox } from "@mui/joy";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <JBox sx={{ p: 3 }}>
          {children}
        </JBox>
      )}
    </div>
  );
}


export default function BasicTabs(props) {
  const { tabs } = props;

  let navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newTabIndex) => {
    event.preventDefault();
    setValue(newTabIndex);
    navigate(tabs[newTabIndex].url, { replace: true });
  };

  return (
    <JBox sx={{ width: "100%" }}>
      <JBox sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
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
      {tabs.map((tab, index) => (
        <TabPanel key={tab.url} value={value} index={index}>
          {tabs[index].content}
        </TabPanel>
      ))}
    </JBox>
  );
}
