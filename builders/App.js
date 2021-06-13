import {StatusBar} from 'native-base';
import React, {useState, useEffect, Component} from 'react';
import MainCard from './components/MainCard/index';
import PanelCard from './components/PanelCard/index';
import InfoCard from './components/InfoCard/index';
import LoaderHeader from './components/Header/index';
import {Container, Content} from 'native-base';

const App = () => {
  const [location, setLocation] = useState([]);
  const getLocation = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=-9.662308&lon=-35.7555122&appid=40a5f7559101e8312445dfae9a9b0db1`;
    const response = await fetch(url);
    const respnseJson = await response.json();
    setLocation(respnseJson);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Container>
      <LoaderHeader />
      <Content padder>
        <PanelCard />
        <MainCard
          title={'Manhã'}
          temperature={'26'}
          ios={'ios-sunny-outline'}
          android={'md-sunny-outline'}
        />
        <MainCard
          title={'Tarde'}
          temperature={'32'}
          ios={'ios-partly-sunny-outline'}
          android={'md-partly-sunny-outline'}
        />
        <MainCard
          title={'Noite'}
          temperature={'21'}
          ios={'ios-cloudy-night-outline'}
          android={'md-cloudy-night-outline'}
        />
        <InfoCard location={location} />
      </Content>
    </Container>
  );
};

export default App;
