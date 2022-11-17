import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Calculator } from './Calculator';

test('it exists', () => {
  const { container } = render(<Calculator />);
  expect(container).not.toBeNull();
});

test('it will be one parcel from the start', () => {
  render(<Calculator />);

  const weightItems = screen.getAllByLabelText(/parcel/i);
  expect(weightItems).toHaveLength(1);
});

test('it will add a new WeightItem when the number of parcels is increased', () => {
  render(<Calculator />);

  const input = screen.getByTestId('parcels');
  fireEvent.change(input, { target: { value: '2' } });
  fireEvent.blur(input);

  const weightItems = screen.getAllByLabelText(/parcel/i);
  expect(weightItems).toHaveLength(2);
});

test('it will remove a WeightItem when the number of parcels is decreased', () => {
  render(<Calculator />);

  const input = screen.getByTestId('parcels');
  fireEvent.change(input, { target: { value: '2' } });
  fireEvent.blur(input);

  fireEvent.change(input, { target: { value: '1' } });
  fireEvent.blur(input);

  const weightItems = screen.getAllByLabelText(/parcel/i);
  expect(weightItems).toHaveLength(1);
});

test('it will not add more than 5 WeightItems', () => {
  render(<Calculator />);

  const input = screen.getByTestId('parcels');
  fireEvent.change(input, { target: { value: '6' } });
  fireEvent.blur(input);

  const weightItems = screen.getAllByLabelText(/parcel/i);
  expect(weightItems).toHaveLength(5);
});
