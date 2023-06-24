import { createStyles, Card, Group, Badge, Image, Text } from '@mantine/core';
import { NoombCarousel } from 'components/carousel/NoombCarousel';
import { ICategory } from '../../../types/CategoryTypes.type';

const useStyles = createStyles({
  card: {
    width: '372px',
    backgroundColor: '#F4F5F6',
    height: '100%',
    gap: '24px',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'start',
  },
  badge: {
    height: '32px',
    borderRadius: '333px',
    padding: '14px 16px',
    backgroundColor: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '12px',
    letterSpacing: '0.05em',
    textAlign: 'left',
    color: 'rgba(35, 38, 47, 1)',
  },
  title: {
    lineHeight: '24px',
    letterSpacing: '-4%',
    textAlign: 'left',
  },
  subtitle: {
    lineHeight: '16px',
    letterSpacing: '0',
    textAlign: 'left',
  },
});

export const Categories = ({ categories }: { categories: ICategory[] }) => {
  const { classes } = useStyles();

  return (
    <NoombCarousel title="Категории" styles={{ height: '248px', gap: '24px' }}>
      {categories.map(({ img, title, description, adsAmount }) => (
        <Card padding="48px 24px 24px" radius="16px" className={classes.card}>
          <Image src={img} alt={title} width="48px" height="48px" />
          <Group spacing="8px">
            <Text size="24px" weight={600} className={classes.title} color="23262F">
              {title}
            </Text>
            <Text size="16px" weight={400} color="rgba(35, 38, 47, 0.75)" className={classes.subtitle}>
              {description}
            </Text>
          </Group>
          <Badge className={classes.badge}>{adsAmount}</Badge>
        </Card>
      ))}
    </NoombCarousel>
  );
};
