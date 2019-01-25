import Enzyme from 'enzyme';
import React from 'react';

import { App } from './App';

it('renders without crashing', () => {
  expect(Enzyme.shallow(< App />)).toBeDefined();
});
