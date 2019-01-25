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

  it('getData function should be called on ComponentDidMount', () => {
    component = Enzyme.shallow(<ShowcaseContainer history={null} />, { disableLifecycleMethods: true });
    const instance = component.instance();

    // class-arrow-function
    /* tslint:disable-next-line */
    const getDataSpy = jest.spyOn(instance, 'getData');

    instance.componentDidMount();
    expect(getDataSpy).toHaveBeenCalled();
  });

  it('should render Loader Component', () => {
    component.instance().setState({ loading: true });
    const loader = component.find(Loader);

    expect(loader).toBeDefined();
  });
});
