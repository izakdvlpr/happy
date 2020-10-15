import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';

import mapIcon from '../../utils/mapIcon';
import SideBar from '../../components/SideBar';
import api from '../../services/api';

import {
  Container,
  Main,
  Form,
  Field,
  Legend,
  InputBlock,
  Label,
  Input,
  Textarea,
  ImagesContainer,
  NewIamge,
  ContentButton,
  ButtonSelect,
  ConfirmButton,
} from './styles';

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);

    alert('Cadastro realizado com sucesso!');

    history.push('/app');
  }

  return (
    <Container>
      <SideBar />

      <Main>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Legend>Dados</Legend>

            <Map
              center={[-19.8612254, -43.9677464]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </Label>
              <Textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="images">Fotos</Label>

              <ImagesContainer>
                {previewImages.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}

                <NewIamge htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </NewIamge>
              </ImagesContainer>

              <Input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </InputBlock>
          </Field>

          <Field>
            <Legend>Visitação</Legend>

            <InputBlock>
              <Label htmlFor="instructions">Instruções</Label>
              <Textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="opening_hours">Horário de funcionamento</Label>
              <Input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="open_on_weekends">Atende fim de semana</Label>

              <ContentButton>
                <ButtonSelect
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </ButtonSelect>
                <ButtonSelect
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </ButtonSelect>
              </ContentButton>
            </InputBlock>
          </Field>

          <ConfirmButton>Confirmar</ConfirmButton>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;
