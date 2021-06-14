import React from 'react';
import {View} from 'react-native';
import {Card, CardItem, Text, Icon, Left, Body} from 'native-base';
import {StyleSheet} from 'react-native';

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
            style={styles.panelCard__Icon}
          />
          <Body>
            <View style={styles.panelCard__Flexcolunm}>
              <Text style={styles.panelCard__Text}>
                {convertKelvinToC(temp)}
              </Text>
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

const styles = StyleSheet.create({
  panelCard__Icon: {
    fontSize: 40,
  },
  panelCard__Flexcolunm: {
    flexDirection: 'row',
  },
  panelCard__Text: {
    fontSize: 22,
  },
});

export default PanelCard;
