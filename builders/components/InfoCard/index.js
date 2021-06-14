import React from 'react';
import {Card, CardItem, Text} from 'native-base';

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
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          fontWeight: '600',
          marginTop: 5,
        }}>
        Info do dia
      </Text>
      <CardItem
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}>
        <Text>Vento</Text>
        <Text>Umidade</Text>
        <Text>Temp.Máx</Text>
        <Text>Temp.Min</Text>
      </CardItem>
      <CardItem
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>{wind}</Text>
        <Text>{humidity} %</Text>
        <Text>{convertKelvinToC(tempMax)} °c</Text>
        <Text>{convertKelvinToC(tempMin)}°c</Text>
      </CardItem>
    </Card>
  );
};

export default InfoCard;
