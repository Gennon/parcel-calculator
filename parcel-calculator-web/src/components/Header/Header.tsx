import { Box, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Box
      as="section"
      color="gray.50"
      bg="blue.300"
      className="App-header"
      pt="90px"
      pb="100px"
      px="8"
      w="100%"
    >
      <Heading fontWeight="extrabold" fontSize="5xl">
        Parcel Calculator
      </Heading>
      <Text fontWeight="medium" fontSize="2xl">
        Get accurat pricing today
      </Text>
    </Box>
  );
};
