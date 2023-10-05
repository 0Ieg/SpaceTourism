import { FC } from 'react';
import styled from 'styled-components';

const CompanyS = styled.article`
.information{
  .achievement{
    text-transform: uppercase;
  }
}
`
export const Company:FC<{name:string, achievement:string}> = (props) => {
  const {name, achievement} = props
  return (
    <CompanyS id='aboutus'>
      <img className='image' src="" alt="" />
      <div className="information">
        <div className="companyName">{name}</div>
        <div className="achievement">{achievement}</div>
      </div>
    </CompanyS>
  )
}