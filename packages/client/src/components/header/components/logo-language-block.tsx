import { Dropdown } from '@noomb/dropdown';
import React from 'react';
import flagUrl from '../../../assets/images/flags.png';
import logoUrl from '../../../assets/images/logo.png';
import './logo-language-block.sass';

export const LogoLanguageBlock = () => (
  <div className="ll-container">
    <div className="ll-container_logo">
      <img src={logoUrl} alt="Логотип" />
      <div className="logo_title">
        <span className="logo_title-1">NOO</span>
        <span className="logo_title-2">MB</span>
        <span className="logo_title-3">ADS</span>
      </div>
    </div>
    <div className="separator" />
    <div className="ll-container_lang">
      <img src={flagUrl} alt="Логотип" />
      <Dropdown dropdownClassName="dropdown" options={[]} />
    </div>
  </div>
);
