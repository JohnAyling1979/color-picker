import { render, screen } from '@testing-library/react';
import SaturationBar from './SaturationBar';

test('renders bar', () => {
  render(<SaturationBar />);

	const element = screen.getByText(/50%/i);

	expect(element).toBeInTheDocument();
});
