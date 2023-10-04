import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../templates/button';
import { StartSection } from './startSection';
import { AboutUs } from './aboutUs';

const MainS = styled.main`
flex-grow: 1;
`
export const Main: FC = () => {
  return (
    <MainS>
      Main
      <StartSection/>
      <AboutUs/>
      <Button title='Забронировать полет' size='big'/>
    </MainS>
  )
}