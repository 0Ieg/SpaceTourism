import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Company } from '../templates/companyInformation';
import { StateType } from '../../BLL/store/store';

const AboutUsS = styled.section`
.title{
  text-transform: lowercase;
  font: 400 48px SpaceAge;
  color: var(--color-white);
  padding: 96px 0 48px;
}
& article{
  padding-bottom: 150px;
}
`

export const AboutUs: FC = () => {
  const companies = useSelector((state:StateType)=>state.aboutUs)
  return (
    <AboutUsS>
      <div className='title'>О нас</div>
      <Company {...companies.virginGalactic}/>
      <Company {...companies.blueOrigin}/>
      <Company {...companies.spaceX}/>
    </AboutUsS>
  )
}