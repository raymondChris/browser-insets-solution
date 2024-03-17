import { ThemeProvider, createTheme } from '@mui/material';
import { SafeArea } from 'capacitor-plugin-safe-area';
import { useEffect, useState } from 'react';

const AppThemeProvider = ({ children }) => {
  const [insets, setInsets] = useState();

  const theme = createTheme();

  const appTheme = {
    ...theme,
    insets,
  };

  const applyInsets = async () => {
    const { insets } = await SafeArea.getSafeAreaInsets();
    setInsets(insets);
  };

  useEffect(() => {
    applyInsets();
  }, []);

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
