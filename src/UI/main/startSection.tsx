import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../templates/button';
import bi from '../../BLL/images/background1.png'

const StartSectionS = styled.section`
height: 100%;
display: flex;
align-items: center;
position: relative;
`
export const StartSection: FC = () => {
  return (
    <StartSectionS>
      <article className='left'>
        <div className="name"></div>
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