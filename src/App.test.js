import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const element = screen.getByText(/to-do list/i);
  expect(element).toBeInTheDocument();
});
test('renders header', () => {
  render(<App />);
  const element = screen.getByRole("textbox");
  expect(element).toBeInTheDocument();
});
describe("submit button", () => {
  test("submit button is in the document", () => {
    render(<App />)
    const button = screen.getByText("submit")
    expect(button).toBeInTheDocument()
  })
  test("delete button is in the document after submit", () => {
    render(<App />)
    const button = screen.getByText("submit")
    fireEvent.click(button)
    const deleteButton = screen.getByText(/delete/i)
    expect(deleteButton).toBeInTheDocument()
  })
  test("delete button is in the document after submit", () => {
    render(<App />)
    const button = screen.getByText("submit")
    fireEvent.click(button)
    fireEvent.click(button)
    const deleteButton = screen.getAllByText(/delete/i)
    expect(deleteButton.length).toBe(2)
  })
})
