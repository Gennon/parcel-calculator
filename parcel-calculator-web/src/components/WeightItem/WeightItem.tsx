import { FC } from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

export interface Props {
  id: number;
  onChange?: (value: number) => void;
}

export const WeightItem: FC<Props> = ({ id, onChange }) => {
  const handleOnChange = (_: string, numberValue: number) => {
    onChange?.(numberValue);
  };

  return (
    <FormControl
      className="WeightItem"
      shadow={'md'}
      maxW={'sm'}
      pb="8"
      px={['4', '8', '12']}
      rounded={'md'}
      bg={'green.200'}
    >
      <FormLabel fontSize={'xl'}>📦 Parcel # {id}</FormLabel>
      <InputGroup>
        <NumberInput
          defaultValue={1}
          min={1}
          max={35}
          onChange={handleOnChange}
        >
          <NumberInputField bg={'white'} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <InputRightAddon children="kg" />
      </InputGroup>
    </FormControl>
  );
};
