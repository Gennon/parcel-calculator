import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Calculator } from './Calculator';
import { getConfiguration } from '../../api/configuration';

jest.mock('../../api/configuration');

beforeEach(() => {
  // @ts-ignore
  getConfiguration.mockResolvedValue({
    data: {
      baseCost: 1,
      costPerKg: 1,
      costPerParcel: 1,
    },
  });
});

test('it exists', async () => {
  const { container } = render(<Calculator />);
  expect(await within(container).findByTestId(/Calculator/i)).not.toBeNull();
});

test('it will be one parcel from the start', async () => {
  render(<Calculator />);

  const weightItems = await screen.findAllByLabelText(/parcel/i);
  expect(weightItems).toHaveLength(1);
});

test('it will add a new WeightItem when the number of parcels is increased', async () => {
  render(<Calculator />);

  const input = await screen.findByTestId('parcels');
  fireEvent.change(input, { target: { value: '2' } });
  fireEvent.blur(input);

  const weightItems = screen.getAllByLabelText(/parcel/i);
  expect(weightItems).toHaveLength(2);
});

test('it will remove a WeightItem when the number of parcels is decreased', async () => {
  render(<Calculator />);

  const input = await screen.findByTestId('parcels');
  fireEvent.change(input, { target: { value: '2' } });
  fireEvent.blur(input);

  fireEvent.change(input, { target: { value: '1' } });
  fireEvent.blur(input);

  const weightItems = screen.getAllByLabelText(/parcel/i);
  expect(weightItems).toHaveLength(1);
});

test('it will not add more than 5 WeightItems', async () => {
  render(<Calculator />);

  const input = await screen.findByTestId('parcels');
  fireEvent.change(input, { target: { value: '6' } });
  fireEvent.blur(input);

  const weightItems = screen.getAllByLabelText(/parcel/i);
  expect(weightItems).toHaveLength(5);
});
