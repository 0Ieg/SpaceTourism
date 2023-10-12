import { FC } from 'react';
import styled from 'styled-components';

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
type PropsType = {name:string, achievement:string, img: any, news:{new1:string, new2:string, new3:string}}
export const Company:FC<PropsType> = (props) => {
  const {name, achievement, img, news} = props
  return (
    <CompanyS id='aboutus'>
      <img className='image' src={img} alt="" />
      <div className="information">
        <div className="companyName">{name}</div>
        <div className="achievement">{achievement}</div>
        <div className="news">
          <div className="new">{news.new1}</div>
          <div className="new">{news.new2}</div>
          <div className="new">{news.new3}</div>
        </div>
      </div>
    </CompanyS>
  )
}