import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../templates/button';


const StartSectionS = styled.section`
height: 100dvh;
display: grid;
grid-template-columns: 600px 1fr;
position: relative;
background-color: #696060;
.left{
  align-self: center;
  .name{
    text-transform: lowercase;
    color: var(--color-white);
    .name__top{
      font: 400 60px SpaceAge;
    }
    .name__bottom{
      font: 400 110px SpaceAge;
    }
  }
  .allegations{
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    color: var(--color-white);
    margin-top: 15px;
    margin-bottom: 50px;
  }
}
.information{
  align-self: end;
  margin: 0 auto 140px;
  display: flex;
  gap: 52px;
  color: var(--color-white);
  font-size: 14px;
  & div{
    width: 165px;
  }
}
`
export const StartSection: FC = () => {
  return (
    <StartSectionS>
      <article className='left'>
        <div className="name">
          <div className="name__top">космический</div>
          <div className="name__bottom">туризм</div>
        </div>
        <div className="allegations">
          <span>Будущее уже наступило!</span>
          <span>Осуществи мечту детства!</span>
        </div>
        <Button title='Хочу быть космонавтом!' size='big'/>
      </article>
      <article className='information'>
        <div>В 2021 году наступила новая эра в освоении космоса - эра космического туризма. Частные компании получили доступ к космическому пространству.</div>
        <div>Между ними обострилась конкуренция, а цена билета на полеты в космическое пространство снизилась в сто раз.</div>
      </article>
    </StartSectionS>
  )
}