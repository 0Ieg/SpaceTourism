import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../templates/button';

const MainS = styled.footer`
flex-grow: 1;
`
export const Main: FC = () => {
  return (
    <MainS>
      Main
      <Button title='Забронировать полет' size='big'/>
    </MainS>
  )
}