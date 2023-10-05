import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../templates/button';
import { StartSection } from './startSection';
import { AboutUs } from './aboutUs';
import { Route, Routes } from 'react-router-dom';
import { OffersAndServices } from './offersAndServices';
import { ContactsAndGuarantees } from './contactsAndGuarantees';
import { News } from './news';

const MainS = styled.main`
flex-grow: 1;
`
export const Main: FC = () => {
  return (
    <MainS>
      <Routes>
        <Route path='' element={<StartSection />}/>
        <Route path='aboutus' element={<AboutUs />}/>
        <Route path='price' element={<OffersAndServices/>}/>
        <Route path='services' element={<OffersAndServices/>}/>
        <Route path='guarantees' element={<ContactsAndGuarantees/>}/>
        <Route path='news' element={<News/>}/>
      </Routes>
    </MainS>
  )
}