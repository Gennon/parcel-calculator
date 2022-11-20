import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { getConfiguration } from './api/configuration';

jest.mock('./api/configuration');

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

test('App exists', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Parcel Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
