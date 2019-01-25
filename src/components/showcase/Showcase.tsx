import './Showcase.css';

import React, { Fragment } from 'react';
import { Card, Header, Image } from 'semantic-ui-react';

import logo from '../../assets/imgs/olx_logo.png';
import { IProduct } from '../../utils/models/Product';

interface IProps {
  rows: IProduct[];
  onItemClick(row: IProduct): void;
}

// Exporting for testing purposes
export const Showcase = (props: IProps) => (
  <Fragment>
    <Header as="h2">
      <Image src={logo} />
      <Header.Content>Showcase</Header.Content>
    </Header>

    <Card.Group stackable doubling itemsPerRow={3}>
      {props.rows.map((row) => (
        // tslint:disable-next-line:jsx-no-lambda
        <Card key={row.id} onClick={() => props.onItemClick(row)}>
          <Card.Content>
            <Image floated="left" size="small" src={logo} />
            <Card.Header>{row.title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <span>{row.city_label}</span>
            <span style={{ float: 'right' }}>{row.created}</span>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </Fragment>
);

export default React.memo(Showcase);
