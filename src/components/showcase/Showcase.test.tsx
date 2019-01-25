import Enzyme from 'enzyme';
import React from 'react';

import { IProduct } from '../../utils/models/Product';
import { Showcase } from './Showcase';

const mockProducts: IProduct[] = [
  {
    id: '205799123',
    title: 'iphone 5s 16gb silver bialy stan dbd Pl dystrybucja 100% sprawny',
    created: '10  lut',
    description: 'Sprzedam Iphone 5s w',
    params: [['Marka', 'iPhone'], ['Stan', 'Używane']],
    city_label: 'Kobyłka',
  }, {
    id: '136306295',
    title: 'Apple iPhone 4S jak nowy gwarancja, pudelko Warszawa',
    created: '10  lut',
    description: 'Mam do zaoferowania',
    params: [['Marka', 'iPhone'], ['Stan', 'Używane']],
    city_label: 'Warszawa Ursynów',
  }];

describe('::Component -> components/showcase/Showcase.tsx::', () => {

  let component: Enzyme.ShallowWrapper;
  beforeEach(() => {
    component = Enzyme.shallow(<Showcase rows={mockProducts} onItemClick={null} />);
  });

  /* -- */

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
});
