import React from 'react';
import {Header, Left, Button, Icon, Body, Right, Title} from 'native-base';

const LoaderHeader = props => {
  return (
    <Header>
      <Left style={{flex: 1}}>
        <Button transparent>
          <Icon name="reload-outline" style={{fontSize: 20}} />
        </Button>
      </Left>
      <Body>
        <Title style={{marginLeft: 2, marginRight: 2}}>Clima App</Title>
      </Body>
      <Right style={{flex: 1}} />
    </Header>
  );
};

export default LoaderHeader;
