import { createStyles } from '@mantine/core';
import { useState } from 'react';

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

const useStyles = createStyles({
  'dropdown-container': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: '4px',
    width: '41px',
    height: '16px',
    border: 'unset',
  },
});

export const Dropdown = ({ options, defaultOption, placeholder, optionClassName, dropdownClassName }: IDropdown) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(defaultOption ?? null);
  const { classes } = useStyles();
  return (
    <select name="select" className={classes['dropdown-container']}>
      {options.map((option) => (
        <option value={option.id} selected={option.id === selectedOption?.id}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
