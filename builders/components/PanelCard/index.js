import {StatusBar} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {Card, CardItem, Text, Icon, Left, Body} from 'native-base';

let temperatura = '31';

const PanelCard = props => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Icon
            ios="ios-earth-outline"
            android="md-earth-outline"
            style={{fontSize: 40}}
          />
          <Body>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 22}}>{temperatura}</Text>
              <Text>°c</Text>
            </View>
            <Text note>Brasil, Maceió, 13:22</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default PanelCard;
