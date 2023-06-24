import { AppShell, Container, createStyles } from '@mantine/core';
import { NoombFooter } from 'components/footer/NoombFooter';
import { NoombHeader } from 'components/header/NoombHeader';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <AppShell
      styles={{
        main: {
          padding: '0 64px',
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<NoombHeader />}
      footer={<NoombFooter />}
    >
      <Outlet />
    </AppShell>
  );
};
