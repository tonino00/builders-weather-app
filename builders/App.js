import React, {useState, useEffect} from 'react';
import MainCard from './components/MainCard/index';
import PanelCard from './components/PanelCard/index';
import InfoCard from './components/InfoCard/index';
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Title,
} from 'native-base';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';

const App = () => {
  const [main, setMain] = useState([]);
  const [wind, setWind] = useState([]);
  const [sys, setSys] = useState([]);
  const [othersInfo, othersInfoSet] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getData = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=-9.66625&lon=-35.735193959&appid=072b36ecacac162b8d289d3275a8b93a`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setisLoading(false);
    setMain(responseJson.main);
    setWind(responseJson.wind);
    setSys(responseJson.sys);
    othersInfoSet(responseJson);
  };

  useEffect(() => {
    getData();
  }, []);

  async function setData() {
    await getData();
  }

  useEffect(() => {
    setData();
  }, []);

  function convertKelvinToC(kelvin) {
    return parseInt(kelvin - 273);
  }

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="blue" size={36} />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <Left style={styles.flexItem}>
          <Button transparent onPress={() => setData()}>
            <Icon name="reload-outline" style={styles.icon} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Clima App</Title>
        </Body>
        <Right style={styles.flexItem} />
      </Header>
      <Content>
        <PanelCard main={main} sys={sys} othersInfo={othersInfo} />
        <MainCard
          title={'Manhã'}
          temperature={'26'}
          ios={'ios-sunny-outline'}
          android={'md-sunny-outline'}
        />
        <MainCard
          title={'Tarde'}
          temperature={'33'}
          ios={'ios-partly-sunny-outline'}
          android={'md-partly-sunny-outline'}
        />
        <MainCard
          title={'Noite'}
          temperature={convertKelvinToC(main.temp_min)}
          ios={'ios-cloudy-night-outline'}
          android={'md-cloudy-night-outline'}
        />
        <InfoCard main={main} wind={wind} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 2,
    marginRight: 2,
  },
  icon: {
    fontSize: 20,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#FFFFFF',
  },
  flexItem: {
    flex: 1,
  },
});

export default App;
