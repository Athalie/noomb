import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.module.sass';
import { MainLayout } from './layout/main.layout';
import { Ads } from './pages/ads';
import { Blog } from './pages/blog';
import { Home } from './pages/home.page';
import { Services } from './pages/services';
import { Shops } from './pages/shops';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="ads" element={<Ads />} />
      <Route path="shops" element={<Shops />} />
      <Route path="services" element={<Services />} />
      <Route path="blog" element={<Blog />} />
    </Route>
  </Routes>
);

export default App;
