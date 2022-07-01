import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders link', () => {
  render(<App />);
  const linkElement = screen.getByText(`Do Something You Can't Win At`);
  expect(linkElement).toBeInTheDocument();
});
