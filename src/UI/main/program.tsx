import { FC } from 'react';
import styled from 'styled-components';
import bigBear from '../../BLL/images/bigBear.svg'

const Styled = styled.section`
height: 100dvh;
color: var(--color-white);
display: flex;
flex-direction: column;
gap: 50px;
.map{
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  .title{
    font: 400 48px SpaceAge;
    text-transform: lowercase;
  }
  .bigBear{
    width: 600px;
    align-self: flex-end;
  }
}
.appeal{
  /* padding-top: 100px; */
  display: flex;
  justify-content: space-between;
  .title{
    font: 400 48px SpaceAge;
    text-transform: lowercase;
  }
  .content{
    display: flex;
    gap: 50px;
    span{
      font: 400 14px SFPro;
      max-width: 165px;
    }
  }
}
`
export const Program: FC = () => {
  return (
    <Styled>
      <div className="map">
        <div className="title">Как все <br/>происходит</div>
        <img src={bigBear} alt="" className="bigBear" />
      </div>
      <div className="appeal">
        <div className="title">Успей<br/>забронировать!</div>
        <div className="content">
          <span>Руководство Virgin Galactic надеется, что массовые суборбитальные космические полеты начнутся до 2022 года. Компания уже несколько лет продает билеты на такие полеты по 250 тыс долл.</span>
          <span>Virgin Galactic получила задатков более чем 80 млн долл, а количество желающих превышает 600 человек.</span>
        </div>
      </div>
    </Styled>
  )
}