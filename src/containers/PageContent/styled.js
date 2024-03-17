import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { footerHeight, haederHeight } from '../../assets';

export const PageContentContainer = styled(Box)`
  height: calc(100% - ${haederHeight}px - ${footerHeight}px);
  width: 100%;
  overflow-y: auto;
`;
