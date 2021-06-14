import {StatusBar} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {Card, CardItem, Text, Icon, Left, Body} from 'native-base';

const PanelCard = props => {
  let temp = props.main.temp;
  let sys = props.sys.country;
  let name = props.othersInfo.name;

  function getCurrentHour() {
    let clock = new Date();
    return clock.getHours() + ':' + clock.getMinutes();
  }

  function convertKelvinToC(kelvin) {
    return parseInt(kelvin - 273);
  }
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
              <Text style={{fontSize: 22}}>{convertKelvinToC(temp)}</Text>
              <Text>°c</Text>
            </View>
            <Text note>
              {sys}, {name} {getCurrentHour()}
            </Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default PanelCard;
