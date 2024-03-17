import { Fab } from '@mui/material';
import { FloatingButtonContainer } from './styled';

const FloatingButton = ({ icon: Icon, onClick, bottomInset = 20 }) => {
  const bottomInsetVal = bottomInset;

  return (
    <FloatingButtonContainer bottomInsetVal={bottomInsetVal}>
      <Fab color="primary" onClick={onClick}>
        <Icon />
      </Fab>
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
