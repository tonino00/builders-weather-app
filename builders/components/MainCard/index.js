import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, CardItem, Text, Icon, Body} from 'native-base';

const MainCard = props => {
  return (
    <Card>
      <CardItem>
        <Text style={styles.text}>{props.title}</Text>
      </CardItem>
      <CardItem bordered>
        <Body style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{alignItems: 'center', margin: 0}}>
            <Icon
              ios={props.ios}
              android={props.android}
              style={{fontSize: 40}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 30}}>{props.temperature}</Text>
            <Text>°c</Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MainCard;
