import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { backgroundColor, haederHeight } from '../../assets';

export const HeaderContainer = styled(Box)`
  width: 100%;
  height: ${haederHeight}px;
  .MuiAppBar-root {
    background-color: ${backgroundColor};
  }
  .MuiToolbar-root {
    height: ${haederHeight}px;
    min-height: ${haederHeight}px;
  }
`;
