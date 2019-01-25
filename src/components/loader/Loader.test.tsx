import Enzyme from 'enzyme';
import React from 'react';

import Loader from './Loader';

describe('::Component -> components/loader/Loader.tsx::', () => {
  it('renders without crashing', () => {
    const component = Enzyme.shallow(<Loader />);
    expect(component).toBeDefined();
  });
});
