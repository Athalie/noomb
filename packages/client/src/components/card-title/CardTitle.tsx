import { createStyles, Title } from '@mantine/core';
import cn from 'classnames';

interface ICardTitle {
  text: string;
  className?: string;
}

const useStyles = createStyles({
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '36px',
    letterSpacing: '-0.03em',
    textAlign: 'left',
    color: 'rgba(35, 38, 47, 1)',
  },
});

export const CardTitle = ({ text, className }: ICardTitle) => {
  const { classes } = useStyles();
  return <Title className={cn(classes.title, className)}>{text}</Title>;
};
