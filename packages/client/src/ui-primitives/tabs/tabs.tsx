import { createStyles, NavLink, Tabs } from '@mantine/core';
import cn from 'classnames';
import { Outlet, useNavigate, generatePath, useMatch } from 'react-router-dom';

type TabItem = {
  url: string;
  title: string;
  tabClassName?: string;
};

interface ITabs {
  tabs: TabItem[];
  className?: string;
}

const useStyles = createStyles({
  tabs: {},
  tabList: {
    gap: '32px',
    flexWrap: 'nowrap',
    border: 0,
  },
  tab: {
    margin: 0,
    border: 0,
    fontWeight: 500,
    color: '#23262F',
    '&:hover': {
      background: 'unset',
      border: 0,
      color: '#23262F',
      fontWeight: 600,
    },
    '&:focus': {
      border: 0,
      color: '#23262F',
      fontWeight: 600,
    },
  },
});

export const NoombTabs = ({ tabs, className }: ITabs) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const match = useMatch('/:tab');

  const handleTabChange = (value: string) => navigate(generatePath(`/${value}`));

  return (
    <Tabs className={''} onTabChange={handleTabChange}>
      <Tabs.List className={cn(classes.tabList, className ?? '')} defaultValue={tabs[0].url}>
        {tabs.map((tab) => (
          <Tabs.Tab className={classes.tab} key={tab.url} value={tab.url}>
            <NavLink
              styles={{
                root: {
                  '--nl-hover': 'red',
                  '--nl-bg': 'red',
                  '&:hover, &:focus, &:active, &:focus:active': {
                    backgroundColor: 'transparent',
                  },
                  '&[data-active]': {
                    '&:hover, &:focus, &:active, &:focus:active': {
                      backgroundColor: 'transparent',
                    },
                    backgroundColor: 'transparent',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '16px',
                    letterSpacing: '0',
                    textAlign: 'left',
                    color: 'rgba(35, 38, 47, 1)',
                  },
                },
              }}
              active={tab.url === `/${match?.params.tab ?? ''}`}
              label={tab.title}
            />
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Tabs.Panel value="gallery" pt="xs">
        <Outlet />
      </Tabs.Panel>
    </Tabs>
  );
};
