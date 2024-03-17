import { Button } from '@mui/material';
import { ReactLogo } from '../../assets';
import { CenteredContent } from '../../containers';
import { ButtonContainer } from './styled';

const ReactPage = () => {
  return (
    <CenteredContent>
      <ReactLogo size={100} />
      <ButtonContainer>
        <Button>Link</Button>
      </ButtonContainer>
    </CenteredContent>
  );
};

export default ReactPage;
