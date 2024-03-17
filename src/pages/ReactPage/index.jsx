import { Button } from '@mui/material';
import { ReactLogo } from '../../assets';
import { CenteredContent } from '../../containers';
import { ButtonContainer } from './styled';
import { Browser } from '@capacitor/browser';

const ReactPage = () => {
  const openLink = async () => {
    await Browser.open({ url: 'https://react.dev/' });
  };

  return (
    <CenteredContent>
      <ReactLogo size={100} />
      <ButtonContainer>
        <Button onClick={openLink}>Link</Button>
      </ButtonContainer>
    </CenteredContent>
  );
};

export default ReactPage;
