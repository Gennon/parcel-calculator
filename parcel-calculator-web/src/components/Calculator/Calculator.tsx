import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FC } from 'react';

export const Calculator: FC = () => {
  return (
    <Box as="section">
      <FormControl id="weight">
        <FormLabel>The number of packages</FormLabel>
        <Input
          type="number"
          size="lg"
          placeholder="# of packages"
          min={1}
          max={10}
        />
      </FormControl>
    </Box>
  );
};
