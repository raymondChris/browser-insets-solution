import { Browser } from '@capacitor/browser';
import { Button, Typography } from '@mui/material';
import { ViteLogo, footerHeight } from '../../assets';
import { CenteredContent } from '../../containers';
import { ButtonContainer, CounterContainer } from './styled';
import FloatingButton from '../../components/FloatingButton';
import { Add } from '@mui/icons-material';
import { useState } from 'react';

const VitePage = () => {
  const [counter, setCounter] = useState(0);

  const incHandler = () => {
    setCounter(prevState => prevState + 1);
  };

  const openLink = async () => {
    await Browser.open({ url: 'https://vitejs.dev/' });
  };

  return (
    <CenteredContent>
      <ViteLogo size={100} />
      <ButtonContainer>
        <Button onClick={openLink}>Link</Button>
      </ButtonContainer>
      <CounterContainer>
        <Typography>Counter: {counter}</Typography>
      </CounterContainer>
      <FloatingButton icon={Add} onClick={incHandler} bottomInset={footerHeight + 20} />
    </CenteredContent>
  );
};

export default VitePage;
