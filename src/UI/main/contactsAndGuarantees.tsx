import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import elonMusk from '../../BLL/images/elonMusk.png'

const ContactsAndGuaranteesS = styled.section`
min-height: 100dvh;
display: flex;
flex-direction: column;
justify-content: space-between;
.top{
  color: var(--color-white);
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .contacts{
    .title{
      font:  400 48px SpaceAge;
      margin-bottom: 45px;
    }
    .description{
      font: 400 24px SFPro;
    }
  }
  .guarantees{
    display: grid;
    position: relative;
    .title{
      font:  400 48px SpaceAge;
      margin-bottom: 45px;
    }
    .description{
      font: 400 24px SFPro;
      position: relative;
      z-index: 3;
    }
    .image{
      justify-self: end;
      position: absolute;
      z-index: 2;
      top: 140px;
    }
  }
}
.bottom{
  color: var(--color-white);
  display: flex;
  gap: 50px;
  justify-content: space-between;
  font: 400 16px SFPro;
  height: 150px;
  margin-bottom: 50px;
  .information{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .menu .menu__list{
    height: 100%;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .menu__item{
      transition: all 0.1s linear;
      &:hover{
        color: var(--color-pink);
      }
    }
  }
  .links{
    text-transform: uppercase;
    .links__list{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      &>:nth-child(4){
        color: red;
      }
      .links__item{
        transition: all 0.1s linear;
        &:hover{
          color: var(--color-pink);
        }
      }
    }
  }
}
`
export const ContactsAndGuarantees: FC = () => {
  return (
    <ContactsAndGuaranteesS>
      <div className="top">
        <div className="contacts">
          <div className="title">Контакты</div>
          <div className="description">Оставь свои контакты и мы перезвоним тебе в ближайшие 100 лет!</div>
          
        </div>
        <div className="guarantees">
          <div className="title">Гарантии</div>
          <div className="description">Ни одна моя ракета еще не сделала удачную попытку, потому что в ней не было тебя!<br/>Будь первым!<br/>Колонизируй Марс!<br/>Илон Маск</div>
          <img src={elonMusk} alt="" className="image" />
        </div>
      </div>
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
            <li className="links__item"><a target='_blank' href="https://www.spacex.com/">spacex.com</a></li>
            <li className="links__item"><a target='_blank' href="https://www.blueorigin.com/">blueorigin.com</a></li>
            <li className="links__item"><a target='_blank' href="https://www.virgingalactic.com/">virgingalactic.com</a></li>
            <li className="links__item"><a target='_blank' href="">0 800 000 000 00</a></li>
            <li className="links__item"><a target='_blank' href="https://www.roscosmos.ru/202/">МКС</a></li>
          </ul>
        </div>
      </div>
    </ContactsAndGuaranteesS>
  )
}