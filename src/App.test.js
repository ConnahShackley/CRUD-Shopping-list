import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import List from './App'

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/To do list/i);
  expect(element).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByRole(/button/i);
  expect(element).toBeInTheDocument();
});

