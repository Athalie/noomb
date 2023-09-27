import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ChatLayout } from './layouts/ChatLayout';
import { EntryLayout } from './layouts/EntryLayout';
import { MainLayout } from './layouts/MainLayout';
import { Blog } from './pages/blog/Blog';
import { Home } from './pages/home/Home';
import { Services } from './pages/services/Services';
import { Shops } from './pages/shops/Shops';

export const App = () => (
  <Routes>
    <Route path="/login" element={<EntryLayout />} />
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="shops" element={<Shops />} />
      <Route path="services" element={<Services />} />
      <Route path="blog" element={<Blog />} />
    </Route>
    <Route path="/chat" element={<ChatLayout />} />
  </Routes>
);

export default App;
