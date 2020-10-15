import styled from 'styled-components';	
import { Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';	

export const Container = styled.div`	
  width: 100vw;	
  height: 100vh;	
  position: relative;	
  display: flex;	
  	
  .leaflet-container {	
    z-index: 5;	
  }	
`;	

export const SideBar = styled.div`	
  width: 440px;	
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);	
  padding: 80px;	
  display: flex;	
  flex-direction: column;	
  justify-content: space-between;  	
`;	

export const Header = styled.div`	
  > h2 {	
    font-size: 40px;	
    font-weight: 800;	
    line-height: 42px;	
    margin-top: 64px;	
  }	
  	
  > p {	
    line-height: 28px;	
    margin-top: 24px;	
  }	
`;	

export const Footer = styled.div`	
  display: flex;	
  flex-direction: column;	
  line-height: 24px;	
  	
  > strong {	
    font-weight: 800;	
  }	
`;	

export const CreateButton = styled(Link)`	
  position: absolute;	
  right: 40px;	
  bottom: 40px;	
  z-index: 10;	
  width: 64px;	
  height: 64px;	
  background: #15c3d6;	
  border-radius: 20px;	
  display: flex;	
  justify-content: center;	
  align-items: center;	
  transition: background-color 0.2s;	
  	
  &:hover {	
    background: #17d6eb;	
  }	
`;

export const ModalPopup = styled(Popup).attrs({
  closeButton: false,
  
  minWidth: 240,
  maxWidth: 240,
})`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }
  
  .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .leaflet-popup-tip-container {
    display: none;
  }
`;