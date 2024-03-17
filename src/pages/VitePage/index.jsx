import { Button, Typography } from '@mui/material';
import { ViteLogo, footerHeight } from '../../assets';
import { CenteredContent } from '../../containers';
import { ButtonContainer, CounterContainer } from './styled';
import FloatingButton from '../../components/FloatingButton';
import { Add } from '@mui/icons-material';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

const VitePage = () => {
  const [counter, setCounter] = useState(0);
  const theme = useTheme();
  const bottomInset = theme?.insets?.bottom || 0;

  const incHandler = () => {
    setCounter(prevState => prevState + 1);
  };

  return (
    <CenteredContent>
      <ViteLogo size={100} />
      <ButtonContainer>
        <Button>Link</Button>
      </ButtonContainer>
      <CounterContainer>
        <Typography>Counter: {counter}</Typography>
      </CounterContainer>
      <FloatingButton icon={Add} onClick={incHandler} bottomInset={bottomInset + footerHeight + 20} />
    </CenteredContent>
  );
};

export default VitePage;
