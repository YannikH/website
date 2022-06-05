import { DeviceSelector, DeviceFrameset } from 'react-device-frameset'
import '/node_modules/react-device-frameset/dist/styles/marvel-devices.min.css'
import '/node_modules/react-device-frameset/dist/styles/device-selector.min.css'
import { BrowserView, MobileView } from 'react-device-detect';
import { Link, Route, Routes } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box, createTheme, ThemeProvider } from '@mui/material';
import { RecentActors } from '@mui/icons-material';
import { useState } from 'react';

const Home = () => (
  <h1>Hello World!</h1>
);
const Page2 = () => (
  <h1>Hello World 2!</h1>
);

const MobileAppRouting = () => (
  <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/test" element={<Page2/>}></Route>
    </Routes>
  </>
);

const theme = createTheme({});

const MobileAppWrapper = ({children}) => (
  <ThemeProvider theme={theme}>
    <MobileView>
      {children}
    </MobileView>
    <BrowserView>
      <DeviceSelector>
          { props => 
            <DeviceFrameset {...props}>
              {children}
            </DeviceFrameset>
          }
      </DeviceSelector>
    </BrowserView>
  </ThemeProvider>
);

const MobileLink = ({to}) => (
  <Link to={`/mobile/${to}`}></Link>
)

const MobileApp = () => {
  const [bottomNavigationValue, setBottomNavigationValue] = useState("");

  return (
    <MobileAppWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <MobileAppRouting />
        <BottomNavigation
          showLabels
          value={bottomNavigationValue}
          onChange={(_, newValue) => {
            setBottomNavigationValue(newValue);
          }}>
          <BottomNavigationAction component={Link} to="/mobile/" label="Recents" icon={<RecentActors />} />
          <BottomNavigationAction component={Link} to="/mobile/test" label="Favorites" icon={<RecentActors />} />
          <BottomNavigationAction component={Link} to="/mobile/test" label="Nearby" icon={<RecentActors />} />
        </BottomNavigation>
      </Box>
    </MobileAppWrapper>
  );
};

export default MobileApp