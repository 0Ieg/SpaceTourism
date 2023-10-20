import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../templates/button';

const Styled = styled.section`
height: 100dvh;
display: flex;
flex-direction: column;
justify-content: center;
gap: 100px;
color: var(--color-white);
.title{
  font: 400 48px SpaceAge;
}
.offers{
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  .offer{
    display: flex;
    flex-direction: column;
    gap: 25px;
    .content{
      height: 400px;
      max-width: 500px;
      border: 1px solid var(--color-white);
      border-radius: 5px;
      box-shadow: inset 0px 0px 10px #fff, 0px 0px 5px #fff;
      background-color: hsla(0, 0%, 100%, 2%);
      .text{
        font: 400 24px SFPro;
        .red{
          color: var(--color-red);
        }
      }
    }
    .old_price{
      font: 400 16px SFPro;
      position: relative;
      &::after{
        content: '';
        width: 100%;
        height: 2px;
        background-color: var(--color-red);
        position: absolute;
        z-index: 3;
        top: 50%;
        left: 0;
        transform: rotate(15deg) translateY(-50%);
      }
    }
    .new_price{
      font: 400 48px SFPro;
    }
  }
  .offer:last-child{
    text-align: right;
  }
}
`
export const Price: FC = () => {
  return (
    <Styled>
      <div className="title">Спец <br/>предложения</div>
      <div className="offers">
        <div className="offer">
        <div className="content">
            <div className="text">Забронируй полет <span className='red'>прямо сейчас</span> и получи скидку 1000$</div>
            <span className="old_price">250 000 $</span>
            <div className="new_price">249 000 $</div>
          </div>
          <Button size='middle' title='ЗАБРОНИРОВАТЬ ПОЛЕТ'/>
        </div>
        <div className="offer">
          <div className="content">
            <div className="text">Приведи друга и получи <span className='red'>скидку 10%</span> на следующий полет, если вернешься</div>
            <span className="old_price">249 000 $</span>
            <div className="new_price">225 000 $</div>
          </div>
          <Button size='middle' title='ЗАБРОНИРОВАТЬ ПОЛЕТ'/>
        </div>
      </div>
    </Styled>
  )
}