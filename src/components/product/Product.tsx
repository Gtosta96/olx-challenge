import React, { Fragment } from 'react';
import { Grid, Header, Icon, Item, Label } from 'semantic-ui-react';

import logo from '../../assets/imgs/olx_logo.png';
import { IProduct } from '../../utils/models/Product';

interface IProps {
  product: IProduct;
  back(): void;
}

// Exporting for testing purposes
export const Product = (props: IProps) => (
  <Fragment>
    <Header>
      <Icon size="large" name="arrow left" style={{ cursor: 'pointer' }} onClick={props.back} />
    </Header>

    <Grid>
      <Grid.Column largeScreen={12} computer={12} tablet={16} mobile={16}>
        <Item.Group>
          <Item>
            <Item.Image size="medium" src={logo} />

            <Item.Content>
              <Item.Header>{props.product.title}</Item.Header>
              <Item.Description>{props.product.description}</Item.Description>

              <div style={{ display: 'flex', margin: '20px 0' }}>
                <Item.Extra>
                  <Header sub>City</Header>
                  {props.product.city_label}
                </Item.Extra>
                <Item.Extra>
                  <Header sub>Date</Header>
                  {props.product.created}
                </Item.Extra>
              </div>

              {props.product.params.map((param) => (
                param.map((p) => <Label key={p}>{p}</Label>)
              ))}
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Column>
    </Grid>
  </Fragment>
);

export default React.memo(Product);
