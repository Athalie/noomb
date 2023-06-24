import { Button, Image } from '@mantine/core';
import React from 'react';
import bookmark from '../../assets/icons/bookmark.svg';

export const NoombBookmarkButton = ({ className }: { className?: string }) => (
  <Button
    className={className}
    variant="subtle"
    radius="xl"
    w="48px"
    h="48px"
    styles={() => ({
      root: {
        padding: '14px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      },
      icon: {
        marginRight: 0,
      },
      leftIcon: {
        marginRight: 0,
      },
    })}
    leftIcon={<Image src={bookmark} width="20px" alt="bookmark" />}
  />
);
