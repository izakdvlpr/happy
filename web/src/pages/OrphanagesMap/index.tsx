import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import {
  Container,
  SideBar,
  Header,
  Footer,
  CreateButton,
  ModalPopup,
} from './styles';

import api from '../../services/api';

import mapMarkerImg from '../../assets/map-marker.svg';

import mapIcon from '../../utils/mapIcon';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>();

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

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
        center={[-19.8612254, -43.9677464]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        
        {orphanages?.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[Number(orphanage.latitude), Number(orphanage.longitude)]}
          >
            <ModalPopup>
              {orphanage.name}

              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </ModalPopup>
          </Marker>
        ))}        
      </Map>

      <CreateButton to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </CreateButton>
    </Container>
  );
};

export default OrphanagesMap;
