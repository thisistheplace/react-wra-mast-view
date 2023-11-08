import React from 'react';
import { render, screen } from '@testing-library/react';
import WraMastView from './App';
import json from './json/iea43_wra_data_model.json'

test('renders learn react link', () => {
  render(<WraMastView editor={true} json={json} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
