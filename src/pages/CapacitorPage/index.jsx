import { Button } from '@mui/material';
import { CapacitorLogo } from '../../assets';
import { CenteredContent } from '../../containers';
import { ButtonContainer } from './styled';
import { Browser } from '@capacitor/browser';

const CapacitorPage = () => {
  const openLink = async () => {
    await Browser.open({ url: 'https://capacitorjs.com/' });
  };

  return (
    <CenteredContent>
      <CapacitorLogo size={100} />
      <ButtonContainer>
        <Button onClick={openLink}>Link</Button>
      </ButtonContainer>
    </CenteredContent>
  );
};

export default CapacitorPage;
