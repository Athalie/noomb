import { createStyles, Select } from '@mantine/core';
import { langs } from 'mocks/header-tabs.mock';
import arrow from '../../assets/icons/arrow.svg';
import flagUrl from '../../assets/images/flags.png';
import { NoombLogo } from '../logo/NoombLogo';

const useStyles = createStyles({
  'll-container': {
    height: '48px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  lang: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: '8px',
    width: '69px',
    height: '20px',
  },
  separator: {
    width: '48px',
    height: 0,
    border: '1px solid rgba(35, 38, 47, 0.1)\n',
    transform: 'rotate(90deg)',
  },
});

interface ILogoLangBlock {
  data?: string[];
}

export const LogoLangBlock = ({ data }: ILogoLangBlock) => {
  const { classes } = useStyles();

  return (
    <div className={classes['ll-container']}>
      <NoombLogo />
      <div className={classes.separator} />
      <div className={classes.lang}>
        <img src={flagUrl} alt="Логотип" />
        <Select
          rightSection={<img alt="arrow down" src={arrow} />}
          defaultValue={langs[0]}
          data={data ?? langs}
          size="xs"
          styles={(theme) => ({
            input: {
              border: 0,
              padding: 0,
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '16px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'rgba(35, 38, 47, 1)',
              height: '16px',
            },
            wrapper: {
              width: '46px',
              height: '16px',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              gap: '2px',
              cursor: 'pointer',
            },
            rightSection: {
              width: '16px',
              height: '16px',
              position: 'relative',
            },
          })}
        />
      </div>
    </div>
  );
};
