import { createStyles, Header } from '@mantine/core';
import { NoombTabs } from '@noomb/tabs';
import { TabItems } from 'mocks/header-tabs.mock';
import { LogoLangBlock } from './LogoLangBlock';
import { NoombToolbar } from './Toolbar';

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    flexFlow: 'row unwrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    width: '100%',
    padding: '0 64px',
    borderBottom: '1px solid rgba(35, 38, 47, 0.05)',
    gap: '32px',
  },
  tabs: {
    flexWrap: 'nowrap',
  },
}));

export const DesktopNoombHeader = () => {
  const { classes } = useStyles();

  return (
    <Header height="120px" className={classes.header}>
      <LogoLangBlock />
      <NoombTabs tabs={TabItems} className={classes.tabs} />
      <NoombToolbar />
    </Header>
  );
};
