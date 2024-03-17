import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const HaderAndFooterContainer = styled(Box)`
  width: 100%;
  height: 100%;
  padding-top: ${({ topInset }) => topInset}px;
  padding-bottom: ${({ bottomInset }) => bottomInset}px;
`;
