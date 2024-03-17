import styled from '@emotion/styled';
import { BottomNavigation } from '@mui/material';
import { backgroundColor, footerHeight } from '../../assets';

export const StyledBottomNavigation = styled(BottomNavigation)`
  height: ${footerHeight}px;
  width: 100%;
  background-color: ${backgroundColor};
  border-top: 1px solid white;
`;
