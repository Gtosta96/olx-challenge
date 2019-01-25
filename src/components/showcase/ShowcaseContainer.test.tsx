import Enzyme from 'enzyme';
import React from 'react';

import Loader from '../loader/Loader';
import ShowcaseContainer from './ShowcaseContainer';

describe('::Component -> components/showcase/ShowcaseContainer.tsx::', () => {

  let component: Enzyme.ShallowWrapper;
  beforeEach(() => {
    component = Enzyme.shallow(<ShowcaseContainer history={null} />);
  });

  /* -- */

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  // FIXME
  // REF: https://github.com/airbnb/enzyme/issues/944
  it.skip('getData function should be called on ComponentDidMount', () => {
    const cdmSpy = jest.spyOn(component.instance(), 'componentDidMount');
    const getDataSpy = jest.spyOn(ShowcaseContainer.prototype, 'getData');

    expect(cdmSpy).toHaveBeenCalled();
    expect(getDataSpy).toHaveBeenCalled();
  });

  it('should render Loader Component', () => {
    component.instance().setState({ loading: true });
    const loader = component.find(Loader);

    expect(loader).toBeDefined();
  });
});
