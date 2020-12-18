// mocking HTTP requests
// http://localhost:3000/login-submission

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test(`the main page renders correctly`, () => {
  render(<App />);
  expect(screen.getByText(/Phone Catalog/i)).toBeInTheDocument();
});

test(`user can edit a phone`, () => {
  render(<App />);
  screen.getByLabelText('edit-phone').click();
  const priceInput = screen.getByLabelText('price');
  const price = '200€';
  const editButton = screen.getByLabelText('edit-button');

  userEvent.type(priceInput, price);
  expect(priceInput.value).toBe(price);

  userEvent.click(editButton);
  expect(screen.getByText(/200€/i)).toBeInTheDocument();
});
