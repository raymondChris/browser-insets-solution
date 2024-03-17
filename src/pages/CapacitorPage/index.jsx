import { Button } from '@mui/material';
import { CapacitorLogo } from '../../assets';
import { CenteredContent } from '../../containers';
import { ButtonContainer } from './styled';

const CapacitorPage = () => {
  return (
    <CenteredContent>
      <CapacitorLogo size={100} />
      <ButtonContainer>
        <Button>Link</Button>
      </ButtonContainer>
    </CenteredContent>
  );
};

export default CapacitorPage;
