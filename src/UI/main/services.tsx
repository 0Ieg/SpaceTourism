import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../templates/button';
import astronaut from '../../BLL/images/astronaut.png'
import { Slider } from '../templates/slider';

const Styled = styled.section`
color: var(--color-white);
min-height: 100dvh;
.title{
  padding: 96px 0;
  font: 400 48px SpaceAge;
  text-transform: lowercase;
}
.x{
  display: grid;
  grid-template-columns: 1fr minmax(290px, 500px);
  align-items: center;
  .description{
    display: flex;
    flex-direction: column;
    gap: 24px;
    .essence{
      font: 400 24px SFPro;
    }
    .components{
      font: 400 24px SFPro;
      .component{
        display: flex;
        align-items: center;
        &::before{
          content: '';
          width: 20px;
          height: 20px;
          margin-right: 15px;
          background-color: var(--color-white);
          border-radius: 50%;
          flex-shrink: 0;
        }
      }
    }
    .price{
      font: 400 12px SFPro;
    }
  }
  .buttons{
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;
    .astronaut{
      width: 192px;
      position: absolute;
      left: 300px;
      top: -129px;
    }
  }
}
.album{
  .advice{
    font: 400 24px SpaceAge;
    text-align: center;
    padding-bottom: 100px;
  }
}
`
export const Services: FC = () => {
  return (
    <Styled>
      <div className="title">Дополнительные <br/>услуги</div>
      <div className="x">
        <div className="description">
          <div className="essence">С Вами полетит профессиональный фотограф</div>
          <ul className="components">
            <li className="component">20 фотографий в профессиональной обработке</li>
            <li className="component">фото книга</li>
            <li className="component">магнит на холодильник в подарок</li>
          </ul>
          <div className="price">Стоимость фотосессии в невесомости 100 000 $. Доплати 50 000 $ и получи все фото в цветокоррекции на диске.</div>
        </div>
        <div className="buttons">
          <Button size='middle' title='КУПИТЬ УСЛУГИ ФОТОГРАФА'/>
          <Button size='middle' title='ХОЧУ И ДИСК'/>
          <img src={astronaut} alt="" className="astronaut"/>
        </div>
      </div>
      <div className="album">
        <Slider/>
        <div className="advice">Ты знаешь о Космическом законе – представь себе то, что ты хочешь, и оно войдет в твою жизнь.</div>
      </div>
    </Styled>
  )
}