import { render, screen } from '@testing-library/react';
import ColorCircle from './ColorCircle';

test('renders Color Circle', () => {
  render(<ColorCircle />);

	const element = screen.getByTestId('color-circle');

	expect(element).toBeInTheDocument();
});
