import Enzyme from 'enzyme';
import React from 'react';

import Loader from '../loader/Loader';
import ProductContainer from './ProductContainer';

describe('::Component -> components/table/ProductContainer.tsx::', () => {

  let component: Enzyme.ShallowWrapper;
  beforeEach(() => {
    component = Enzyme.shallow(<ProductContainer history={null} match={null} />);
  });

  /* -- */

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  it.skip('getData function should be called on ComponentDidMount', () => {
    const cdmSpy = jest.spyOn(component.instance(), 'componentDidMount');
    const getDataSpy = jest.spyOn(ProductContainer.prototype, 'getData');

    expect(cdmSpy).toHaveBeenCalled();
    expect(getDataSpy).toHaveBeenCalled();
  });

  it('should render Loader Component', () => {
    component.instance().setState({ loading: true });
    const loader = component.find(Loader);

    expect(loader).toBeDefined();
  });
});
