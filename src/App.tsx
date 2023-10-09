import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './UI/header/header';
import { Main } from './UI/main/main';
import bi1 from './BLL/images/background1.png'
import bi2 from './BLL/images/background2.jpg'
import { useLocation } from 'react-router-dom';

const AppS = styled.div`
&.bi1{
  background-image: url(${bi1});
  background-position: right;
  background-size: cover;
}
&.bi2{
  background-image: url(${bi2});
  background-position: bottom;
  background-size: cover;
}

`
export const App: FC = () => {
  const url = useLocation().pathname
  console.log(url)
  const bi = ()=>{
    switch(url){
      case '/': return 'bi1';
      case '/aboutus': return'bi2'
    }
  }
  return (
    <AppS className={bi()}>
      <div className="container">
        <Header />
        <Main />
      </div>
    </AppS>
  )
}
