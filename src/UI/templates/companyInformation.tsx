import { FC } from 'react';
import styled from 'styled-components';
import { CompanyType } from '../../BLL/store/aboutUsSlice';
import { Button } from './button';

const CompanyS = styled.article`
color: var(--color-white);
display: flex;
gap: 20px;
justify-content: space-between;
.image{
  box-shadow: inset 0px 0px 10px #fff, 0px 0px 5px #fff;
  border-radius: 5px;
}
.information{
  max-width: 600px;
  width: 100%;
  .companyName{
    font: 700 30px SFPro;
  }
  .achievement{
    text-transform: uppercase;
    font: 400 12px SFPro;
    color: var(--color-blue);
    padding-top: 4px;
  }
  .news{
    display: flex;
    justify-content: space-between;
    font: 400 16px SFPro;
    padding: 30px 0 48px;
    .new{
      max-width: 165px;
    }
  }
  .table{
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 50px;
    .thead{
      border-top: 2px solid var(--color-white);
      border-bottom: 2px solid var(--color-white);
      tr{
        font: 400 16px SFPro;
        th{
          padding: 10px 0;
        }
      }
    }
    .tbody{
      border-bottom: 2px solid var(--color-white);
      td{
        padding: 2px 0 8px;
        div{
          text-align: center;
          &:nth-child(1){
            font: 700 36px SFPro;
          }
          &:nth-child(2){
            font: 700 14px SFPro;
          }
        }
      }
    }
  }
}
`

export const Company:FC<CompanyType> = (props) => {
  return (
    <CompanyS id='aboutus'>
      <img className='image' src={props.image} alt="" />
      <div className="information">
        <div className="companyName">{props.name}</div>
        <div className="achievement">{props.achievement}</div>
        <div className="news">
          <div className="new">{props.news.new1}</div>
          <div className="new">{props.news.new2}</div>
          <div className="new">{props.news.new3}</div>
        </div>
        <table className='table'>
          <thead className='thead'>
            <tr>
              <th>Время в пути</th>
              <th>Расстояние</th>
              <th>В невесомости</th>
              <th>Стоимость</th>
              <th>Вернешься?</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            <tr>
              <td>
                <div>{props.tableData.travel[0]}</div>
                <div>{props.tableData.travel[1]}</div>
              </td>
              <td>
                <div>{props.tableData.distance[0]}</div>
                <div>{props.tableData.distance[1]}</div>
              </td>
              <td>
                <div>{props.tableData.weightlessness[0]}</div>
                <div>{props.tableData.weightlessness[1]}</div>
              </td>
              <td>
                <div>{props.tableData.price[0]}</div>
                <div>{props.tableData.price[1]}</div>
              </td>
              <td>
                <div>{props.tableData.chance[0]}</div>
                <div>{props.tableData.chance[1]}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <Button size='small' title='ЗАБРОНИРОВАТЬ ПОЛЕТ'/>
      </div>
    </CompanyS>
  )
}