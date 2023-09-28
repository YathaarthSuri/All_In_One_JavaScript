import Contact from '../Contact';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Contact Us Page Test cases', () => {
  test('Should load contact us component', () => {
    render(<Contact />);

    const heading = screen.getAllByRole('heading');

    // Assertion
    expect(heading[0]).toBeInTheDocument();
  });

  test('Should load button inside contact us component', () => {
    render(<Contact />);

    const button = screen.getAllByRole('button');

    // Assertion
    expect(button[0]).toBeInTheDocument();
  });

  test('Should load input name inside contact us component', () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText('name');

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test('Should load 2 input boxes inside contact us component', () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole('textbox');

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
