import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodingAbilitiesChallenge } from '../../pages/conding-abilities-challenge';

test("Should render the title on the page", () => {
  render(<CodingAbilitiesChallenge />)
  const mainTitle = screen.getByText("Coding abilities challenge");
  expect(mainTitle).toBeInTheDocument();
});

test("Should render the title of each section", () => {
  render(<CodingAbilitiesChallenge />)
  const maskinSection = screen.getByText("Credit card number masking");
  expect(maskinSection).toBeInTheDocument();
  const ordinalSection = screen.getByText("Credit card number masking");
  expect(ordinalSection).toBeInTheDocument();
  const calculatorSection = screen.getByText("Credit card number masking");
  expect(calculatorSection).toBeInTheDocument();
});