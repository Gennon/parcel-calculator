import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App exists', () => {
  render(<App />);
  const linkElement = screen.getByText(/Parcel Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
