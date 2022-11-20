import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FC } from 'react';

export const PriceList: FC = () => {
  const pricePerParcel = 50;
  const pricePerKg = 5;
  const initialPrice = 10;

  const calculatePrice = (numberOfParcels: number, kg: number) => {
    return (
      numberOfParcels * pricePerParcel +
      numberOfParcels * pricePerKg * (kg - 1) +
      initialPrice
    );
  };

  const headers = [1, 2, 3, 4, 5];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <TableContainer>
      <Table variant="striped">
        <TableCaption>Price for #parcels in kg</TableCaption>
        <Thead>
          <Tr>
            <Th>kg</Th>
            {headers.map(header => (
              <Th key={header}>#{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map(row => (
            <Tr key={row}>
              <Td>{row}</Td>
              {headers.map(header => (
                <Td key={header}>{calculatePrice(header, row)},-</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>kg</Th>
            {headers.map(header => (
              <Th key={header}>#{header}</Th>
            ))}
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
