import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './UI/header/header';
import { Main } from './UI/main/main';
import bi1 from './BLL/images/background1.png'
import bi2 from './BLL/images/background2.jpg'
import bi4 from './BLL/images/background3.png'
import bi3 from './BLL/images/background4.png'
import bi5 from './BLL/images/background5.png'
import { useLocation } from 'react-router-dom';

const AppS = styled.div`
position: relative;
background-color: #000;
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
&.bi3{
  background-image: url(${bi3});
  background-position: bottom;
  background-size: 100% 600px;
  background-repeat: no-repeat;
  background-color: #010203;
}
&.bi4{
  background-image: url(${bi4});
  background-position: top left;
  background-size: cover;
  background-color: #010203;
}
&.bi5{
  background-image: url(${bi5});
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: #010203;
}
.container{
  position: relative;
  z-index: 3;
}
.lg1{
  height: 588px;
  width: 100%;
  background: linear-gradient( rgba(1, 2, 3, 0), #010203);
  position: absolute;
  z-index: 2;
  bottom: 0;
}
.lg3{
  height: 600px;
  width: 100%;
  background: linear-gradient(#010203, #0102037f, #010203);
  position: absolute;
  z-index: 2;
  bottom: 0;
}
.lg5{
  height: 435px;
  width: 100%;
  background: linear-gradient(#010203, rgba(1, 2, 3, 0), #010203);
  position: absolute;
  z-index: 2;
  bottom: 0;
}
`
export const App: FC = () => {
  const url = useLocation().pathname
  console.log(url)
  const bi = ()=>{
    switch(url){
      case '/': return 'bi1';
      case '/aboutus': return'bi2';
      case '/program': return 'bi3';
      case '/price' : return 'bi4';
      case '/guarantees': return 'bi5';
      case '/services': return 'bi2';
    }
  }
  const lg = ()=>{
    switch(url){
      case '/': return 'lg1';
      case '/program': return 'lg3';
      case '/guarantees': return 'lg5';
    }
  }
  return (
    <AppS className={bi()}>
      <div className="container">
        <Header />
        <Main />
      </div>
      <div className={lg()}></div>
    </AppS>
  )
}
