import React, { PureComponent } from 'react';

import store from '../../store';
import { IProduct, IProducts } from '../../utils/models/Product';
import Loader from '../loader/Loader';
import Showcase from './Showcase';

interface IProps {
  history: any;
}

interface IState {
  loading: boolean;
  rows: IProducts[];
}
class ShowcaseContainer extends PureComponent<IProps, IState> {
  state = {
    loading: false,
    rows: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ loading: true });

    // simulates HTTP Request
    setTimeout(() => {
      this.setState({ rows: store, loading: false });
    }, 1000);
  }

  // TODO: implement memoize (memoize-one).
  getRows = () => {
    return this.state.rows.reduce((result, item) => [...result, ...item.ads], []);
  }

  onItemClick = (row: IProduct) => {
    this.props.history.push(`/list/${row.id}`);
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return <Showcase rows={this.getRows()} onItemClick={this.onItemClick} />;
  }
}

export default ShowcaseContainer;
