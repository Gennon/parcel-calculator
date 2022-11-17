import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Calculator } from '../Calculator';
import { PriceList } from '../PriceList';

export const Main: FC = () => {
  return (
    <Box
      maxW={'1024'}
      minH={'50vh'}
      mx="auto"
      mt="-80px"
      bg="white"
      rounded="md"
      boxShadow="md"
    >
      <Tabs isFitted variant="enclosed-colored">
        <TabList>
          <Tab fontSize={'2xl'}>Calculator</Tab>
          <Tab fontSize={'2xl'}>Price List</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack>
              <Calculator />
            </VStack>
          </TabPanel>
          <TabPanel>
            <PriceList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
