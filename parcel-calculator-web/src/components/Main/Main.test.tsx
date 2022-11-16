import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';

test('Main has Calculator Tab', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('Main has Price List Tab', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Price List/i);
  expect(linkElement).toBeInTheDocument();
});
