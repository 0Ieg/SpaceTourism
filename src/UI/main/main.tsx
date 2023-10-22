import { FC } from 'react';
import styled from 'styled-components';
import { StartSection } from './startSection';
import { AboutUs } from './aboutUs';
import { Route, Routes } from 'react-router-dom';
import { ContactsAndGuarantees } from './contactsAndGuarantees';
import { Program } from './program';
import { Price } from './price';
import { Services } from './services';

const MainS = styled.main`
`
export const Main: FC = () => {
  return (
    <MainS>
      <Routes>
        <Route path='' element={<StartSection />}/>
        <Route path='aboutus' element={<AboutUs />}/>
        <Route path='program' element={<Program/>}/>
        <Route path='price' element={<Price/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='guarantees' element={<ContactsAndGuarantees/>}/>
      </Routes>
    </MainS>
  )
}