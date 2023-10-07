import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../../BLL/images/hz.png'

const HeaderS = styled.header`
position: fixed;
left: 0;
right: 0;
z-index: 5;
background: linear-gradient(#01020367,#000 35%, #000 65%, #01020367);
height: 60px;
.container{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu__list{
  display: flex;
  gap: 30px;
  align-items: center;
  .menu__item{
    color: var(--color-white);
    transition: all 0.1s linear;
  }
}
.contact{
  display: flex;
  align-items: center;
  gap: 20px;
  .phone{
    font: 400 20px serif;
  }
  .avatar{

  }
}
.active{
  color: var(--color-pink);
  text-shadow: 0 0 3px var(--color-pink);
}
`
export const Header: FC = () => {
  return (
    <HeaderS>
      <div className="container">
        <nav className='menu'>
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink to={'/'}>
                <img src={avatar} alt="" />
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'aboutus'}>О НАС </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'price'}>СТОИМОСТЬ</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'services'}>ДОП. УСЛУГИ</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'guarantees'}>ГАРАНТИИ</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'news'}>НОВОСТИ</NavLink>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <div className="phone">0 800 000 000 00</div>
          <img src={avatar} alt="" className="avatar" />
        </div>
      </div>
    </HeaderS>
  )
}