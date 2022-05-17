import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../src/screens/Home';

jest.useFakeTimers();

describe('render successfully', () => {
  it('renders App screen', () => {
    const { toJSON } = render(<Home />);

    expect(toJSON()).toMatchSnapshot();
  });
});
