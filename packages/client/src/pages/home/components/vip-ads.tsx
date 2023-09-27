import { createStyles, Image } from '@mantine/core';
import { NoombBlackButton } from 'components/buttons/NoombBlackButton';
import { NoombCard } from 'components/card/NoombCard';
import { NoombCarousel } from 'components/carousel/NoombCarousel';
import iconRightUrl from '../../../assets/icons/arrow-right-light.svg';
import { IAd } from '../../../types/AdTypes';

const useStyles = createStyles({
  button: {
    position: 'relative',
    top: '102px',
    left: 'calc(50% - 98px)',
  },
});

export const VipAds = ({ vipAds }: { vipAds: IAd[] }) => {
  const { classes } = useStyles();

  return (
    <div>
      <NoombCarousel title="VIP Объявления" styles={{ gap: '32px', height: '534px' }}>
        {vipAds.map((vipAd) => (
          <NoombCard {...vipAd} />
        ))}
      </NoombCarousel>
      <NoombBlackButton
        className={classes.button}
        text="Смотреть все"
        icon={<Image src={iconRightUrl} alt="стрелка" />}
      />
    </div>
  );
};
