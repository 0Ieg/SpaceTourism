import { FC } from 'react';
import styled from 'styled-components';

const ButtonS = styled.button`
/* background-color: transparent; */
background-color: transparent;
border: 1px solid var(--color-light-gray);
transition: border-color 0.1s linear;
cursor: pointer;
height: 60px;
border-radius: 5px;
color: var(--color-white);
width: 100%;
font: 400 16px SFPro;
transition: box-shadow 0.1s ease;
&:hover{
  border-color: var(--color-red);
  box-shadow: inset 0px 0px 10px #fff, 0px 0px 5px #fff;
}
&.big{max-width: 600px;}
&.middle{max-width: 500px;}
&.small{max-width: 300px;}
`
export const Button:FC<{title:string, size:'big'|'middle'|'small'}> = (props)=>{
  const {title, size} = props
  return(
    <ButtonS className={size}>{title.toUpperCase()}</ButtonS>
  )
}