import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { WeightItem } from './WeightItem';

test('it exists', () => {
  const { container } = render(<WeightItem id={1} />);
  expect(container).not.toBeNull();
});

test('Will not have values below 1', () => {
  render(<WeightItem id={1} />);
  const input = screen.getByRole('spinbutton');

  expect(input).toHaveValue('1');
  fireEvent.change(input, { target: { value: '-1' } });
  fireEvent.blur(input);
  expect(input).toHaveValue('1');
});

test('Will not have values above 35', () => {
  render(<WeightItem id={1} />);
  const input = screen.getByRole('spinbutton');

  expect(input).toHaveValue('1');
  fireEvent.change(input, { target: { value: '100' } });
  fireEvent.blur(input);
  expect(input).toHaveValue('35');
});
