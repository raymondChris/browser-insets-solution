import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { HeaderContainer } from './styled';

const Header = ({ label }) => {
  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};

export default Header;
