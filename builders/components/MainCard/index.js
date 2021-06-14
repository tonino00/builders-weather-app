import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, CardItem, Text, Icon, Body} from 'native-base';

const MainCard = props => {
  return (
    <Card>
      <CardItem style={styles.mainCard__Item}>
        <Text style={styles.mainCard__title}>{props.title}</Text>
      </CardItem>
      <CardItem bordered>
        <Body style={styles.mainCard__Body}>
          <View style={styles.mainCard__Content}>
            <Icon
              ios={props.ios}
              android={props.android}
              style={styles.mainCard__Icons}
            />
          </View>
          <View style={styles.mainCard__Flex}>
            <Text style={styles.mainCard__Text}>{props.temperature}</Text>
            <Text>°c</Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  mainCard__title: {
    fontSize: 18,
    fontWeight: '600',
  },
  mainCard__Item: {
    backgroundColor: '#c3c3c3',
  },
  mainCard__Body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainCard__Content: {
    alignItems: 'center',
    margin: 0,
  },
  mainCard__Icons: {
    fontSize: 40,
  },
  mainCard__Flex: {
    flexDirection: 'row',
  },
  mainCard__Text: {
    fontSize: 30,
  },
});

export default MainCard;
