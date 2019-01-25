import Enzyme from 'enzyme';
import React from 'react';

import { IProduct } from '../../utils/models/Product';
import { Product } from './Product';

const mockProduct: IProduct = {
  id: '123',
  title: 'mockTitle',
  created: '2019-01-11T02:40:47Z',
  description: 'description',
  params: [[''], ['']],
  city_label: 'city'
};

fdescribe('::Component -> components/product/Product.tsx::', () => {

  let component: Enzyme.ShallowWrapper;
  beforeEach(() => {
    component = Enzyme.shallow(<Product product={mockProduct} back={null} />);
  });

  /* -- */

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
});
