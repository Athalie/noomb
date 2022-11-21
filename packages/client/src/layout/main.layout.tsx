import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import styles from './main.module.sass';

export const MainLayout = () => (
  <div className={styles.body}>
    <header className={styles.header}>
      <Header />
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
    <footer className={styles.footer}>
      <Footer />
    </footer>
  </div>
);
