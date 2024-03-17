import { Route, Routes, useNavigate } from 'react-router-dom';

import { VitePage, ReactPage, CapacitorPage } from '../pages';
import { HeaderAndFooter } from '../layouts';
import { useState } from 'react';
import { CapacitorIcon, ReactIcon, ViteIcon } from '../assets';

const App = () => {
  const [activePathId, setActivePathId] = useState('vite');

  const navigate = useNavigate();

  const goToPageHandler = ({ id, path }) => {
    navigate(path);
    setActivePathId(id);
  };

  const navList = [
    {
      label: 'Vite',
      id: 'vite',
      path: '/',
      icon: ViteIcon,
    },
    {
      label: 'React',
      id: 'react',
      path: '/react',
      icon: ReactIcon,
    },
    {
      label: 'Capacitor',
      id: 'capacitor',
      path: '/capacitor',
      icon: CapacitorIcon,
    },
  ];

  const title = navList.find(({ id }) => id === activePathId);

  return (
    <HeaderAndFooter
      title={title ? title.label : ''}
      activePathId={activePathId}
      onChangePage={goToPageHandler}
      navList={navList}
    >
      <Routes>
        <Route path="/" element={<VitePage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/capacitor" element={<CapacitorPage />} />
      </Routes>
    </HeaderAndFooter>
  );
};

export default App;
