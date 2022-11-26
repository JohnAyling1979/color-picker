import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HSL Diagram', () => {
  render(<App />);
  const element = screen.getByText(/HSL Diagram/i);
  expect(element).toBeInTheDocument();
});
