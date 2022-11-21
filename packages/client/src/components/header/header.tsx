import { Tabs } from '@noomb/tabs';
import React from 'react';
import { LogoLanguageBlock } from './components/logo-language-block';
import { Toolbar } from './components/toolbar';
import { TabItems } from './header.constants';

export const Header = () => (
  <>
    <LogoLanguageBlock />
    <Tabs tabs={TabItems} />
    <Toolbar />
  </>
);
