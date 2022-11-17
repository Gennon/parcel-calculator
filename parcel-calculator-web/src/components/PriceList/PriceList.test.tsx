import React from 'react';
import { render, screen } from '@testing-library/react';
import { PriceList } from './PriceList';

test('it exists', () => {
  const { container } = render(<PriceList />);
  expect(container).not.toBeNull();
});

test('has correct structure', () => {
  const { asFragment } = render(<PriceList />);
  expect(asFragment()).toMatchSnapshot();
});
