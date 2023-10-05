import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../../BLL/images/hz.png'

const HeaderS = styled.header`
height: 60px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
.menu__list{
  display: flex;
  gap: 30px;
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
  color: var(--color-red);
}
`
export const Header: FC = () => {
  return (
    <HeaderS>
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
    </HeaderS>
  )
}