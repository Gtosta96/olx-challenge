import React, { PureComponent } from 'react';

import store from '../../store';
import { IProduct } from '../../utils/models/Product';
import Loader from '../loader/Loader';
import Product from './Product';

interface IProps {
  history: any;
  match: any;
}

interface IState {
  loading: boolean;
  product: IProduct;
}
class ProductContainer extends PureComponent<IProps, IState> {
  state = {
    loading: true,
    product: null,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // simulates HTTP Request
    setTimeout(() => {
      // getting all the products from the mock API inneficient and redundant,
      // in a real world app I would make a new HTTP call in order to get the details of that specific product
      const products = store.reduce((result, item) => [...result, ...item.ads], []);
      const product = products.find((product) => product.id === this.props.match.params.itemId);

      this.setState({ product, loading: false });
    }, 1000);
  }

  back = () => {
    this.props.history.goBack();
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return <Product product={this.state.product} back={this.back} />;
  }
}

export default ProductContainer;
