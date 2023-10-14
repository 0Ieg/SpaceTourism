import { FC } from 'react';
import styled from 'styled-components';
import { CompanyType } from '../../BLL/store/aboutUsSlice';

const CompanyS = styled.article`
color: var(--color-white);
display: flex;
justify-content: space-between;
&>*:not(:last-child){
    margin-bottom: 150px;
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
      </div>
    </CompanyS>
  )
}