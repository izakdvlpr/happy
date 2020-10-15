import React from 'react';
import { useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Container, Logo, BotSide, Button } from './styles';

import mapMarkerImg from '../../assets/map-marker.svg';

const SideBar: React.FC = () => {
  const { goBack } = useHistory();
  
  return (
    <Container>
      <Logo src={mapMarkerImg} alt="Happy" />
      
      <BotSide>
        <Button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </Button>
      </BotSide>
    </Container>
  );
};

export default SideBar;
