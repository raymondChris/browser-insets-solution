import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { StyledBottomNavigation } from './styled';

const Footer = ({ activeId, onClick, itemList }) => {
  return (
    <StyledBottomNavigation value={activeId}>
      {itemList.map(({ label, id, path, icon: Icon }) => (
        <BottomNavigationAction
          key={id}
          label={label}
          value={id}
          icon={<Icon fill={activeId === id ? '#1976d2' : '#a7c7e6'} />}
          onClick={() => onClick({ id, path })}
        />
      ))}
    </StyledBottomNavigation>
  );
};
export default Footer;
