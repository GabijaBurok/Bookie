import React from 'react';
import { AppBar, Box, Tab, Tabs, ThemeProvider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Theme } from '../utils/Theme';


export default function TabNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = React.useState(location.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
    navigate(newValue);
  }

  React.useEffect(() => {
    setSelectedTab(location.pathname);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{width: '100%'}}>
        <AppBar position="static">
          <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="nav tabs"
          role="navigation"
          textColor="primary"
          sx={{bgcolor: 'primary.dark'}}
          >
            <Tab label="Main" value="/home" sx={{color: 'primary.contrastText'}}/>
            <Tab label="To Be Read" value="/tbr" sx={{color: 'primary.contrastText'}}/>
            <Tab label="Read" value="/read" sx={{color: 'primary.contrastText'}}/>
          </Tabs>
        </AppBar>
      </Box>
    </ThemeProvider>
    
  );
}
