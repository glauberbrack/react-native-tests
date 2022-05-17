import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

jest.useFakeTimers();

describe('render successfully', () => {
  it('renders App screen', () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });
});
