import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './UI/header/header';
import { Main } from './UI/main/main';
import { Footer } from './UI/footer/footer';
const AppS = styled.div`
height: 100dvh;
display: flex;
flex-direction: column;
`
export const App: FC = () => {
  return (
    <div className="container">
      <AppS>
        <Header />
        <Main />
        <Footer />
      </AppS>
    </div>
  )
}
