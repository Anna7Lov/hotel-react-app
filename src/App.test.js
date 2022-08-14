/**
 * @jest-environment jsdom
 */
import './matchMedia';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

global.window.matchMedia = jest.fn(() => { return { matches: false, addListener: jest.fn(), removeListener: jest.fn() } })

test('Stay with us', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const text = screen.getByText(/Stay with us/i);
  expect(text).toBeInTheDocument();
});
