import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/landing.svg';

export const Container = styled.div`  
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

export const Wrapper = styled.div`
  position: relative;

  width: 90%;
  max-width: 1100px;

  height: 90%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${logoImg}) no-repeat 80% center;
`;

export const Logo = styled.img``;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
  
  > strong {
    font-weight: 800;
  }
`;

export const Main = styled.main`  
  max-width: 350px;
  
  > h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }
  
  > p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Enter = styled(Link)`  
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;
  
  &:hover {
    background: #96feff;
  }
`;
