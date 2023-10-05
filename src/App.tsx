import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './UI/header/header';
import { Main } from './UI/main/main';
const AppS = styled.div`
height: 100dvh;
display: flex;
flex-direction: column;
position: relative;
`
export const App: FC = () => {
  return (
    <div className="container">
      <AppS>
        <Header />
        <Main />
      </AppS>
    </div>
  )
}
