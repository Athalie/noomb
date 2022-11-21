import React, { useState } from 'react';
import styles from './dropdown.module.sass';

type DropdownOption = {
  id: string | number;
  label: string;
  value: unknown;
};

interface IDropdown {
  options: DropdownOption[];
  defaultOption?: DropdownOption;
  placeholder?: string;
  optionClassName?: string;
  dropdownClassName?: string;
}

export const Dropdown = ({ options, defaultOption, placeholder, optionClassName, dropdownClassName }: IDropdown) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(defaultOption ?? null);

  return (
    <select name="select" className={styles.dropdownContainer}>
      {options.map((option) => (
        <option value={option.id} selected={option.id === selectedOption?.id}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
