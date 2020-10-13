import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import {
  Container,
  SideBar,
  Header,
  Footer,
  CreateButton,
} from './styles';

import mapMarkerImg from '../../assets/map-marker.svg';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>
        
        <Footer>
          <strong>Minas Gerais</strong>
          <span>Belo Horizonte</span>
        </Footer>
      </SideBar>
      
      <Map
        center={[-19.7763281, -43.9308896]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      
      <CreateButton to="">
        <FiPlus size={32} color="#FFF" />
      </CreateButton>
    </Container>
  );
};

export default OrphanagesMap;
