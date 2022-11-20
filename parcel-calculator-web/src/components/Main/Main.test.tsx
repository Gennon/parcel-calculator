import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';
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

test('Main has Calculator Tab', async () => {
  render(<Main />);
  const linkElement = await screen.findByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('Main has Price List Tab', async () => {
  render(<Main />);
  const linkElement = await screen.findByText(/Price List/i);
  expect(linkElement).toBeInTheDocument();
});
