import { Group, Button, createStyles } from '@mantine/core';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles({
  btn: {
    padding: '24px 32px',
    borderRadius: '8px',
    '& span': {
      lineHeight: '16px',
      height: '16px',
    },
  },
  secondary: {
    '& span': {
      color: 'rgba(35, 38, 47, 1)',
    },
    border: '2px solid rgba(35, 38, 47, 0.1)',
  },
  primary: {
    backgroundColor: '#315DF7',
    '& span': {
      color: 'rgba(255, 255, 255, 1)',
    },
    border:
      '2px solid linear-gradient(180deg, rgba(148, 170, 247, 0.27) 0%, rgba(20, 72, 196, 0.42) 100%, rgba(0, 57, 255, 0.42) 100%)',
  },
});

export const NoombToolbar = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleLoginClick = () => navigate('/login');

  return (
    <Group noWrap styles={{ gap: '12px' }}>
      <Button variant="default" className={classNames(classes.btn, classes.secondary)} onClick={handleLoginClick}>
        Войти
      </Button>
      <Button variant="filled" className={classNames(classes.btn, classes.primary)}>
        Выставить объявление
      </Button>
    </Group>
  );
};
