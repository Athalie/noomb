import { Badge, Container, createStyles, Title } from '@mantine/core';

import { SearchInput } from 'components/search/SearchInput';
import star from '../../assets/images/star.svg';

const useStyles = createStyles({
  topContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: '248px',
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: '8px',
    alignItems: 'center',
  },
  title: {
    fontSize: '72px',
    fontWeight: 500,
    lineHeight: '72px',
    letterSpacing: '-0.04em',
    textAlign: 'center',
    color: 'rgba(35, 38, 47, 1)',
  },
  badge: {
    height: '32px',
    padding: '10px 16px 10px 16px',
    gap: '8px',
    background: 'rgba(151, 87, 215, 0.1)',
    '& img': {
      marginInlineEnd: '8px',
    },
  },
  label: {
    color: 'rgba(151, 87, 215, 1)',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textAlign: 'left',
  },
});

//todo сделать универсальнее при реализации других страниц
export const TopPanel = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.topContainer}>
      <div className={classes.titleContainer}>
        <Badge className={classes.badge} size="lg" color="background: rgba(151, 87, 215, 0.1)">
          <img alt="star" src={star} />
          <span className={classes.label}>КРУПНЕЙШАЯ ДОСКА БЕСПЛАТНЫХ ОБЪЯВЛЕНИЙ</span>
        </Badge>
        <Title className={classes.title}>Поиск объявлений</Title>
      </div>
      <SearchInput />
    </div>
  );
};
