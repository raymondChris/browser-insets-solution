import { Capacitor } from '@capacitor/core';
import { ThemeProvider, createTheme } from '@mui/material';
import { SafeArea } from 'capacitor-plugin-safe-area';
import { useEffect, useState } from 'react';
import { getDeviceInsets } from '../../utils';

const AppThemeProvider = ({ children }) => {
  const [insets, setInsets] = useState();

  const theme = createTheme();

  const appTheme = {
    ...theme,
    insets,
  };

  const applyInsets = async () => {
    const { insets } = await SafeArea.getSafeAreaInsets();

    const isNative = Capacitor.isNativePlatform();
    if (import.meta.env.DEV && !isNative) {
      const deviceModel = navigator?.userAgentData?.platform;
      const devInsets = getDeviceInsets(deviceModel);
      insets.top = devInsets.top;
      insets.bottom = devInsets.bottom;
      insets.left = devInsets.left;
      insets.right = devInsets.right;
    }

    setInsets(insets);
  };

  useEffect(() => {
    applyInsets();
  }, []);

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
