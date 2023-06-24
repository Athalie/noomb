import { MediaQuery } from '@mantine/core';
import { DesktopNoombHeader } from 'components/header/DesktopNoombHeader';
import { MobileNoombHeader } from 'components/header/MobileNoombHeader';

export const NoombHeader = () => (
  <>
    <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
      <MobileNoombHeader />
    </MediaQuery>
    <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
      <DesktopNoombHeader />
    </MediaQuery>
  </>
);
