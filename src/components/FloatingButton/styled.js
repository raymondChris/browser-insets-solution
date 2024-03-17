import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const FloatingButtonContainer = styled(Box)`
  position: fixed;
  right: 20px;
  bottom: ${({ bottomInsetVal }) => bottomInsetVal}px;
`;
