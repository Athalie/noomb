import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

type TabItem = {
  url: string;
  title: string;
  tabClassName?: string;
};

interface ITabs {
  tabs: TabItem[];
  listClassName?: string;
}

export const Tabs = ({ tabs, tabsClassName = '' }: ITabs) => (
  <div>
    <nav>
      <ul className={tabsClassName}>
        {tabs.map((tab) => (
          <li className={tab.tabClassName ?? ''} key={tab.url}>
            <NavLink to={tab.url}>{tab.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <Outlet />
  </div>
);
