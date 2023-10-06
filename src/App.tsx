import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './UI/header/header';
import { Main } from './UI/main/main';

const AppS = styled.div`
height: 100dvh;
`
export const App: FC = () => {
  return (
    <AppS>
      <div className="container">
        <Header />
        <Main />
      </div>
    </AppS>
  )
}
