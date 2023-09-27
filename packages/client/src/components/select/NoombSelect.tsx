import { createStyles, Select } from '@mantine/core';
import { SelectProps } from '@mantine/core/lib/Select/Select';
import cn from 'classnames';
import React from 'react';
import arrowLight from '../../assets/icons/arrow-light.svg';

const useStyles = createStyles({
  select: {
    display: 'flex',
    alignItems: 'center',
    '& input': {
      width: '100%',
      padding: 0,
      flexGrow: 1,
    },
    '& input::placeholder': {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '16px',
      letterSpacing: '0em',
      textAlign: 'left',
    },
  },
});

export const NoombSelect = (props: SelectProps & React.RefAttributes<HTMLInputElement>) => {
  const { classes } = useStyles();

  return (
    <Select
      className={cn(classes.select, props.className)}
      rightSection={props.rightSection ?? <img alt="arrow light down" src={arrowLight} />}
      rightSectionWidth={16}
      styles={(theme) => ({
        item: {
          color: 'rgba(255, 255, 255, 1)',
          fontSize: '16px',
          fontWeight: 'bold',
          lineHeight: '16px',
          letterSpacing: '0em',
          textAlign: 'left',
        },
        rightSection: {
          pointerEvents: 'none',
          color: 'rgba(255, 255, 255, 1)',
        },
        ...(props.styles ?? {}),
      })}
      {...props}
    />
  );
};
