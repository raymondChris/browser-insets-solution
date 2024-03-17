import { HaderAndFooterContainer } from './styled';
import { Header, Footer } from '../../components';
import { PageContent } from '../../containers';
import { useTheme } from '@emotion/react';

const HaderAndFooter = ({ title, onChangePage, children, activePathId, navList }) => {
  const theme = useTheme();
  const { top: topInset, bottom: bottomInset } = theme.insets || {};

  return (
    <HaderAndFooterContainer topInset={topInset || 0} bottomInset={bottomInset || 0}>
      <Header label={title} />
      <PageContent>{children}</PageContent>
      <Footer onClick={onChangePage} activeId={activePathId} itemList={navList} />
    </HaderAndFooterContainer>
  );
};

export default HaderAndFooter;
