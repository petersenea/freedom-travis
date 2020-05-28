import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './Home';
// import Home from './components/Home';
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

test('Home.js builds', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/import data/i);
  expect(linkElement).toBeInTheDocument();
});

test('import data button', async () => {
  const { getByTestId, findByTestId } = render(<Home />);
  fireEvent.click(getByTestId("import-data"));
  const item = await findByTestId("error-message");
  expect(item).toBeInTheDocument();
})
