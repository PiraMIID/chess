import { render, screen } from '@testing-library/react';
import {Board} from './board/Board';

test('renders learn react link', () => {
  render(<Board />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
