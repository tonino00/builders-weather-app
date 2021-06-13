import React from 'react';
import {Card, CardItem, Text} from 'native-base';

const InfoCard = props => {
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
      <CardItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
        <Text>22 km/h</Text>
        <Text>{props.location.base}</Text>
        <Text>33 °c</Text>
        <Text>25 °c</Text>
      </CardItem>
    </Card>
  );
};

export default InfoCard;
