import { Avatar, Card, CardSection, createStyles, Group, Image, Text } from '@mantine/core';
import { NoombBookmarkButton } from 'components/buttons/NoombBookmarkButton';
import location from '../../assets/icons/location-gray.svg';
import avatar from '../../assets/images/avatar.svg';
import pubDate from '../../assets/images/pub-date.svg';
import starRating from '../../assets/images/star-rating.svg';
import { IAd } from '../../types/AdTypes';

const useStyles = createStyles({
  card: {
    border: '2px solid rgba(35, 38, 47, 0.05)',
    width: '310px',
    height: '534px',
    borderRadius: '16px',
  },
  vipAdsContainer: {},
  vipAdsTitle: {
    gap: '0',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
  },
  vipAdsLocation: {
    display: 'flex',
    alignItems: 'center',
  },
  vipAdsFooter: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    borderTop: '1px solid rgba(35, 38, 47, 0.05)',
  },
  bookmark: {
    position: 'absolute',
    top: '28px',
    right: '28px',
  },
  rating: {
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: '2px',
  },
  userInfo: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  published: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginLeft: '47px',
  },
  name: {
    lineHeight: '18.83px',
  },
});

export const NoombCard = ({
  img,
  raiting,
  title,
  geoLocation: { country, city },
  reviewsAmount,
  price,
  author: { name, surname },
}: IAd) => {
  const { classes } = useStyles();
  return (
    <Card padding="16px 16px 24px 16px" radius="16px" className={classes.card}>
      <Image src={img} alt={title} width="278px" height="278px" />
      <NoombBookmarkButton className={classes.bookmark} />
      <Group mt="32px" className={classes.vipAdsTitle}>
        <Text weight={500} size="20px" lh="23.54px" w="186px">
          {title}
        </Text>
        <Text
          weight={400}
          size="16px"
          lh="18.56px"
          color="rgba(35, 38, 47, 0.6)"
          display="flex"
          mt="4px"
          className={classes.vipAdsLocation}
        >
          <Image mr="6px" alt="location-mark" src={location} width="20px" />
          {`${country}, ${city}`}
        </Text>
        <Text mt="12px" weight={600} size="24px" lh="28.63px">
          {price}
        </Text>
      </Group>
      <CardSection pt="16px" mt="16px" className={classes.vipAdsFooter}>
        <Avatar
          mr="2px"
          src={avatar}
          styles={() => ({
            root: {
              width: '32px',
              height: '32px',
            },
            image: {
              width: '32px',
              height: '32px',
            },
          })}
        ></Avatar>
        <div className={classes.userInfo}>
          <Text mb="2px" className={classes.name}>{`${name} ${surname}`}</Text>
          <Text display="flex" ff="column nowrap" weight={600} size="16px">
            <Image src={starRating} width="14px" height="14px" mr="4px" />
            <div className={classes.rating}>
              <Text weight={500} size="14px" lh="14px">{`${raiting}`}</Text>
              <Text weight={400} size="14px" lh="14px">{`(${reviewsAmount})`}</Text>
            </div>
          </Text>
        </div>
        <div className={classes.published}>
          <Text weight={400} size="14px" lh="16.24px" color="rgba(35, 38, 47, 0.6)" mb="4px">
            Опубликовано
          </Text>
          <Image
            src={pubDate}
            styles={() => ({
              imageWrapper: {
                width: '128px',
                height: '19px',
              },
              image: {
                objectFit: 'contain',
              },
            })}
          />
        </div>
      </CardSection>
    </Card>
  );
};
