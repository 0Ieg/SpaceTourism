import { FC } from 'react';
import styled from 'styled-components';
import { Company } from '../templates/companyInformation';

const AboutUsS = styled.section`
.title{
  text-transform: uppercase;
  font: 400 48px serif;
}
`
export const AboutUs: FC = () => {
  return (
    <AboutUsS>
      <div className='title'>О нас</div>
      <Company name='Virgin Galactic' achievement='суборбитальный полет'/>
      <Company name='Blue Origin' achievement='суборбитальный полет'/>
      <Company name='SpaceX' achievement='А может на Луну или Марс?'/>
    </AboutUsS>
  )
}