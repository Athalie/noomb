import { createStyles } from '@mantine/core';
import logoUrl from '../../assets/images/logo.png';

const useStyles = createStyles({
  logo: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  logo_title: {
    fontSize: '20px',
    lineHeight: '20px',
    color: '#23262F',
    '&-1': {
      fontWeight: 400,
    },
    '&-2': {
      fontWeight: 600,
    },
    '&-3': {
      fontWeight: 600,
    },
  },
  'logo_title-1': {
    fontWeight: 400,
  },
  'logo_title-2': {
    fontWeight: 600,
  },
  'logo_title-3': {
    fontWeight: 600,
  },
});

export const NoombLogo = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.logo}>
      <img src={logoUrl} alt="Логотип" />
      <div className={classes.logo_title}>
        <span className={classes['logo_title-3']}>NOO</span>
        <span className={classes['logo_title-2']}>MB</span>
        <span className={classes['logo_title-1']}>ADS</span>
      </div>
    </div>
  );
};
