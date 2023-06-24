import { ActionIcon, Button, createStyles, Image, Input } from '@mantine/core';
import { NoombButton } from '@noomb/button/noomb-button';
import { NoombBlackButton } from 'components/buttons/NoombBlackButton';
import { NoombSelect } from 'components/select/NoombSelect';
import { categoriesMock, regions } from 'mocks/categories.mock';
import React from 'react';
import arrowDark from '../../assets/icons/arrow-dark.svg';
import arrowLight from '../../assets/icons/arrow-light.svg';
import locationIcon from '../../assets/icons/location.svg';
import searchLight from '../../assets/icons/search-light.svg';
import searchDark from '../../assets/icons/search.svg';

const useStyles = createStyles({
  searchContainer: {
    background:
      'linear-gradient(0deg, rgba(35, 38, 47, 0.05), rgba(35, 38, 47, 0.05)), linear-gradient(0deg, #F4F5F6, #F4F5F6)',
    width: '100%',
    height: '72px',
    padding: '8px',
    borderRadius: '333px',
    border: '1px',
    marginTop: '32px',
    '& input': {
      background: 'transparent',
      border: 0,
      height: '100%',
    },
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: '36px',
  },
  input: {
    flexGrow: 1,
    borderRight: '1px solid rgba(35, 38, 47, 0.1)',
  },
  searchButton: {
    width: '56px',
    height: '56px',
    backgroundColor: '#315DF7',
    border: '2px',
    borderRadius: '333px',
  },
  lightSelect: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
});

const categories = categoriesMock.map((category) => category.title);

export const SearchInput = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.searchContainer}>
      {/*//todo button*/}
      <NoombBlackButton text="Все категории" icon={<Image alt="arrow light down" src={arrowLight} />} />
      <Input
        className={classes.input}
        icon={<img src={searchDark} alt="search" />}
        placeholder="Например: Квартира в Эстонии..."
        radius="sm"
      />
      <div className={classes.lightSelect}>
        <Image src={locationIcon} width="24px" height="24px" />
        <Button
          variant="transparent"
          rightIcon={<Image src={arrowDark} />}
          styles={() => ({
            root: {
              padding: '8px',
            },
            label: {
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '16px',
              letterSpacing: 0,
              textAlign: 'left',
            },
          })}
        >
          Все регионы
        </Button>
      </div>
      <ActionIcon className={classes.searchButton} size="xs" variant="filled">
        <Image src={searchLight} width="20px" height="20px" />
      </ActionIcon>
    </div>
  );
};
