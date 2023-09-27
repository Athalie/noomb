import { createStyles, Footer, Text } from '@mantine/core';
import { NoombTabs } from '@noomb/tabs';

import { TabFooterItems } from 'mocks/header-tabs.mock';
import { NoombLogo } from '../logo/NoombLogo';
import { NoombCreds } from './NoombCreds';

const useStyles = createStyles({
  footer: {
    padding: '64px 64px 48px',
    backgroundColor: 'rgba(244, 245, 246, 1)',
    width: '100%',
    position: 'static',
  },
  topFooter: {
    paddingBottom: '48px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: '88px',
  },
  bottomFooter: {
    paddingTop: '48px',
    borderTop: '1px solid rgba(35, 38, 47, 0.05)',
  },
  tabs: {
    rowGap: 0,
    minWidth: '453px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
});

export const NoombFooter = () => {
  const { classes } = useStyles();
  return (
    <Footer height="288px" className={classes.footer}>
      <div className={classes.topFooter}>
        <NoombLogo />
        <NoombTabs tabs={TabFooterItems} className={classes.tabs} />
        <NoombCreds />
      </div>
      <div className={classes.bottomFooter}>
        <Text fw={400} fz={14} lh={'16.24px'} color="rgba(35, 38, 47, 0.5)">
          Copyright © 2022 NOOMBADS LLC. All rights reserved
        </Text>
      </div>
    </Footer>
  );
};
