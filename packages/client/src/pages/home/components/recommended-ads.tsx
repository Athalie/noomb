import { createStyles, Image } from '@mantine/core';
import { NoombBlackButton } from 'components/buttons/NoombBlackButton';
import { NoombCard } from 'components/card/NoombCard';
import { CardTitle } from 'components/card-title/CardTitle';
import iconRightUrl from '../../../assets/icons/arrow-right-light.svg';
import { IAd } from '../../../types/AdTypes';

const useStyles = createStyles({
  cardContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '24px',
  },
  recommendedAdsContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    gap: '32px',
    margin: '183px 0 188px',
  },
  recommendedAdsTitle: {
    alignSelf: 'flex-start',
  },
});

export const RecommendedAds = ({ recommendedAds }: { recommendedAds: IAd[] }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.recommendedAdsContainer}>
      <CardTitle text="Рекомендуем вам" className={classes.recommendedAdsTitle} />
      <div className={classes.cardContainer}>
        {recommendedAds.map((recommendedAd) => (
          <NoombCard {...recommendedAd} />
        ))}
      </div>
      <NoombBlackButton text="Смотреть все" icon={<Image src={iconRightUrl} />} />
    </div>
  );
};
