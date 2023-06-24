import { Flex } from '@mantine/core';
import { TopPanel } from 'components/top-panel/TopPanel';
import { recommendedAds, vipAds } from 'mocks/ads.mock';
import { categoriesMock } from 'mocks/categories.mock';
import { Categories } from './components/categories';
import { RecommendedAds } from './components/recommended-ads';
import { VipAds } from './components/vip-ads';

export const Home = () => (
  <Flex direction="column" wrap="nowrap" gap="xs">
    <TopPanel />
    <Categories categories={categoriesMock} />
    <VipAds vipAds={vipAds} />
    <RecommendedAds recommendedAds={recommendedAds} />
  </Flex>
);
