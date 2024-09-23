// app/HomePage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './page'; // Adjust the import path as necessary
import '@testing-library/jest-dom'; // Updated import

describe('HomePage', () => {
  test('renders welcome message and button', () => {
    render(<HomePage />);

    // Check if the heading is in the document
    const heading = screen.getByText(/Welcome to Home Page/i);
    expect(heading).toBeInTheDocument();

    // Check if the button is in the document
    const button = screen.getByRole('button', { name: /Go to Tasks Page/i });
    expect(button).toBeInTheDocument();
  });

  test('button navigates to tasks page', () => {
    render(<HomePage />);

    const button = screen.getByRole('button', { name: /Go to Tasks Page/i });
    expect(button.closest('a')).toHaveAttribute('href', '/tasks');
  });
});
