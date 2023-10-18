import { FC } from 'react';
import styled from 'styled-components';

const Styled = styled.section`
height: 100dvh;
color: var(--color-white);
.map{
  padding-top: 100px;
  .title{
    font: 400 48px SpaceAge;
    text-transform: lowercase;
  }
}
.appeal{
  padding-top: 100px;
  .title{
    font: 400 48px SpaceAge;
    text-transform: lowercase;
  }
}
`
export const Program: FC = () => {
  return (
    <Styled>
      <div className="map">
        <div className="title">Как все происходит</div>
      </div>
      <div className="appeal">
        <div className="title">Успей забронировать!</div>
      </div>
    </Styled>
  )
}