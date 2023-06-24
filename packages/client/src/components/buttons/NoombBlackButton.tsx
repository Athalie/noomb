import { Button } from '@mantine/core';
import React from 'react';

interface INoombBlackButton {
  text: string;
  icon: React.ReactNode;
  className?: string;
}

export const NoombBlackButton = ({ text, icon, className }: INoombBlackButton) => (
  <Button
    className={className}
    styles={() => ({
      root: {
        height: '58px',
        padding: '0 32px',
        borderRadius: '3333px',
        background:
          'linear-gradient(0deg, #23262F, #23262F), linear-gradient(180deg, rgba(129, 129, 129, 0.27) 0%, rgba(0, 0, 0, 0.42) 100%)',
        border: '2px solid linear-gradient(180deg, rgba(129, 129, 129, 0.27) 0%, rgba(0, 0, 0, 0.42) 100%)',
      },
      label: {
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '16px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 1)',
      },
    })}
    rightIcon={icon}
  >
    {text}
  </Button>
);
