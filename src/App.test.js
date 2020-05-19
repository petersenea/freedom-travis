import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// import Home from './components/Home';
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/freedom generator/i);
  expect(linkElement).toBeInTheDocument();
});
