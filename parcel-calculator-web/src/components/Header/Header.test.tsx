import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('Header exists', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Parcel Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
