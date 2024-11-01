import React from 'react';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LayoutComponent from './components/layout';
import WatchListCOmponent from './components/watchlist';
import NewsComponent from './components/News';
import SettingsComponent from './components/settings/settings';

function App() {
  const [theme , colormode] = useMode()
  return (
    <ColorModeContext.Provider value={colormode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
      <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchListCOmponent />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/settings" element={<SettingsComponent />} />
        </Route>
        <Route path="Login" element={<AuthRootComponent />} />
        <Route path="Register" element={<AuthRootComponent />} />
      </Routes>
    </div>
    </LayoutComponent>
      </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default App;
