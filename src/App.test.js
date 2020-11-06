import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});

test("First Name", () => {
  const { getByText } = render(<App />);
  const firstName = getByText(/first name/i);
  expect(firstName).toBeInTheDocument();
});

test("Last Name", () => {
  const { getByText } = render(<App />);
  const lastName = getByText(/last name/i);
  expect(lastName).toBeInTheDocument();
});

test("E-Mail", () => {
  const { getByText } = render(<App />);
  const email = getByText(/e-mail/i);
  expect(email).toBeInTheDocument();
});

test("Message", () => {
  const { getByText } = render(<App />);
  const message = getByText(/message/i);
  expect(message).toBeInTheDocument();
});

test("Submit button", () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('submitButton');
  fireEvent.click(button);
});