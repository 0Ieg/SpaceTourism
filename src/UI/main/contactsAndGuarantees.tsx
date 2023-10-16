import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactsAndGuaranteesS = styled.section`
min-height: 100dvh;
display: flex;
flex-direction: column;
justify-content: space-between;
.bottom{
  color: var(--color-white);
  display: flex;
  gap: 50px;
  justify-content: space-between;
}
`
export const ContactsAndGuarantees: FC = () => {
  return (
    <ContactsAndGuaranteesS>
      <div className="top"></div>
      <div className="bottom">
        <div className="information">
          <div>Служба поддержки работает межгалактично и суборбитально</div>
          <div>График приема посетителей строго по записи</div>
        </div>
        <nav className='menu'>
          <ul className='menu__list'>
            <li className="menu__item"><Link to='aboutus'>О НАС </Link></li>
            <li className="menu__item"><Link to='price'>СТОИМОСТЬ</Link></li>
            <li className="menu__item"><Link to='services'>ДОП. УСЛУГИ</Link></li>
            <li className="menu__item"><Link to='guarantees'>ГАРАНТИИ</Link></li>
            <li className="menu__item"><Link to='news'>НОВОСТИ</Link></li>
          </ul>
        </nav>
        <div className="links">
          <ul className="links__list">
            <li className="links__item"><a href="">spacex.com</a></li>
            <li className="links__item"><a href="">blueorigin.com</a></li>
            <li className="links__item"><a href="">virgingalactic.com</a></li>
            <li className="links__item"><a href=""></a></li>
            <li className="links__item"><a href="">МКС</a></li>
          </ul>
        </div>
      </div>
    </ContactsAndGuaranteesS>
  )
}