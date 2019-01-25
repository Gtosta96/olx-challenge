import React, { Fragment } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

import logo from '../../assets/imgs/olx_logo.png';
import { IProduct } from '../../utils/models/Product';

interface IProps {
  product: IProduct;
  back(): void;
}

// Exporting for testing purposes
export const Product = (props: IProps) => (
  <Fragment>
    <Icon size="large" name="arrow left" style={{ cursor: 'pointer' }} onClick={props.back} />

    <Item.Group>
      <Item>
        <Item.Image size="medium" src={logo} />

        <Item.Content>
          <Item.Header>{props.product.title}</Item.Header>
          <Item.Description>{props.product.description}</Item.Description>

          <div style={{ display: 'flex' }}>
            <Item.Extra>
              <Header sub>City</Header>
              {props.product.city_label}
            </Item.Extra>
            <Item.Extra>
              <Header sub>Date</Header>
              {props.product.created}
            </Item.Extra>
          </div>
        </Item.Content>
      </Item>
    </Item.Group>
  </Fragment>
);

export default React.memo(Product);
