import {
  Box,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FC, useState, useEffect } from 'react';

import { WeightItem } from '../WeightItem';
import { getConfiguration } from '../../api/configuration';

export const Calculator: FC = () => {
  const [parcels, setParcels] = useState([{ id: 1, weight: 1 }]);
  const [ config, setConfig ] = useState({
    baseCost: 1,
    costPerKg: 1,
    costPerParcel: 1,
  });

  // This is a hook that will run when the component is mounted
  // get the configuration from the API and set it in state
  useEffect(() => {
    getConfiguration().then((config) => {
      if(config) {
        setConfig(config.data);
      }
    });
  }, []);


  const handleNumberOfParcelsChange = (_: string, value: number) => {
    let newParcels = [];
    for (let i = 0; i < value; i++) {
      newParcels[i] = { id: i + 1, weight: 1 };
    }
    setParcels(newParcels);
  };

  const handleParcelWeightChange = (id: number, weight: number) => {
    const newParcels = parcels.map(parcel => {
      if (parcel.id === id) {
        return { ...parcel, weight };
      }
      return parcel;
    });
    setParcels(newParcels);
  };

  // For each package we will add 50 to amount, for each 1 kg above the first kg we will add 5 to amount
  // We will also add 10 to amount for the total calculation
  const calculatePriceLocal = () => {
    return parcels.reduce((total, parcel) => {

      return total + config.costPerParcel + (parcel.weight - 1) * config.costPerKg;
    }, config.baseCost);
  };

  return (
    <Box as="section" maxW={'800px'} minW={['100%', '800px']} data-testid="Calculator">
      <FormControl id="parcels">
        <FormLabel fontSize={'2xl'}>The number of packages</FormLabel>
        <NumberInput
          defaultValue={1}
          min={1}
          max={5}
          onChange={handleNumberOfParcelsChange}
        >
          <NumberInputField data-testid="parcels" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <Box mt="8" pb="8" mx="auto" maxW={'740px'}>
        <Wrap>
          {parcels.map(item => {
            return (
              <WrapItem key={item.id} maxW={['100%', '100%', '240px']}>
                <WeightItem
                  id={item.id}
                  onChange={value => handleParcelWeightChange(item.id, value)}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>

      <Box
        as="section"
        maxW={'300px'}
        mx="auto"
        shadow={'lg'}
        p="8"
        rounded="3xl"
        bg={'blue.200'}
      >
        <Text
          fontSize={'2xl'}
          color={'gray.50'}
          fontWeight="bold"
          textAlign={'center'}
        >
          💰 {calculatePriceLocal()},- NOK
        </Text>
      </Box>
    </Box>
  );
};
