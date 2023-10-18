import { FC } from 'react';
import styled from 'styled-components';
import { StartSection } from './startSection';
import { AboutUs } from './aboutUs';
import { Route, Routes } from 'react-router-dom';
import { OffersAndServices } from './offersAndServices';
import { ContactsAndGuarantees } from './contactsAndGuarantees';
import { News } from './news';
import { Program } from './program';

const MainS = styled.main`
`
export const Main: FC = () => {
  return (
    <MainS>
      <Routes>
        <Route path='' element={<StartSection />}/>
        <Route path='aboutus' element={<AboutUs />}/>
        <Route path='program' element={<Program/>}/>
        <Route path='price' element={<OffersAndServices/>}/>
        <Route path='services' element={<OffersAndServices/>}/>
        <Route path='guarantees' element={<ContactsAndGuarantees/>}/>
        <Route path='news' element={<News/>}/>
      </Routes>
    </MainS>
  )
}