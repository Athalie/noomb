import { Carousel } from '@mantine/carousel';
import { createStyles } from '@mantine/core';
import { CardTitle } from 'components/card-title/CardTitle';
import { CSSProperties, ReactNode } from 'react';

const useStyles = createStyles({
  section: {
    marginRight: '-64px',
    marginTop: '136px',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  title: {
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '40px',
    letterSpacing: '-3%',
    textAlign: 'left',
    color: 'rgba(35, 38, 47, 1)',
  },
});

interface INoombCarousel {
  children: ReactNode[];
  title: string;
  styles?: CSSProperties;
  button?: ReactNode;
}

export const NoombCarousel = ({ children, title, styles, button }: INoombCarousel) => {
  const { classes } = useStyles();

  const handleCarouselScroll = () => {
    // todo сделать реакцию на скролл тачем
  };

  return (
    <div className={classes.section} style={styles}>
      <CardTitle text={title} className={classes.title} />
      <Carousel
        styles={() => ({
          slide: { flex: 0 },
        })}
        height={styles?.height}
        align="start"
        dragFree
        slideGap="20px"
        slideSize="372px"
        withControls={false}
        loop
      >
        {children?.map((child) => (
          <Carousel.Slide>{child}</Carousel.Slide>
        ))}
      </Carousel>
      {button}
    </div>
  );
};
