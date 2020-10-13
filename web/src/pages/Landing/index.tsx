import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  Container,
  Wrapper,
  Logo,
  Main,
  Location,
  Enter,
} from './styles';

import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logoImg} alt="Happy" />
        
        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>
        
        <Location>
          <strong>Minas Gerais</strong>
          <span>Belo Horizonte</span>
        </Location>
        
        <Enter to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Enter>
      </Wrapper>
    </Container>
  );
};

export default Landing;
