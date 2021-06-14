import React from 'react';
import {Card, CardItem, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const InfoCard = props => {
  function convertKelvinToC(kelvin) {
    return parseInt(kelvin - 273);
  }

  let tempMin = props.main.temp_min;
  let tempMax = props.main.temp_max;
  let humidity = props.main.humidity;
  let wind = props.wind.speed;

  return (
    <Card>
      <Text style={styles.infoCard__Title}>Info do dia</Text>
      <CardItem style={styles.infoCard__Item}>
        <Text>Vento</Text>
        <Text>Umidade</Text>
        <Text>Temp.Máx</Text>
        <Text>Temp.Min</Text>
      </CardItem>
      <CardItem style={styles.infoCard__Item}>
        <Text>{wind}</Text>
        <Text>{humidity} %</Text>
        <Text>{convertKelvinToC(tempMax)} °c</Text>
        <Text>{convertKelvinToC(tempMin)}°c</Text>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  infoCard__Title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    marginTop: 5,
  },
  infoCard__Item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default InfoCard;
