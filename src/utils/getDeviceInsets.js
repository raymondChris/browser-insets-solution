const DEVICE_INSETS = {
  iPhone12Pro: {
    top: 47,
    bottom: 34,
    left: 0,
    right: 0,
  },
};

export const getDeviceInsets = deviceModel => {
  return DEVICE_INSETS[deviceModel] || { top: 0, bottom: 0, left: 0, right: 0 };
};
