import { render, screen } from '@testing-library/react';
import LightnessBar from './LightnessBar';

test('renders bar', () => {
  render(<LightnessBar />);

	const element = screen.getByText(/50%/i);

	expect(element).toBeInTheDocument();
});
