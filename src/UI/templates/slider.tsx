import { FC } from "react";
import styled from "styled-components";

const Styled = styled.div`
width: 100%;
height: 650px;
padding: 50px 0;
border: 2px solid var(--color-white);
margin: 50px 0 50px 0;
box-shadow: inset 0px 0px 10px #fff, 0px 0px 5px #fff;
border-radius: 5px;
display: grid;
grid-template-columns: max-content 1fr max-content;
align-items: center;

.window{
  width: 100%;
  height: 100%;;
  box-shadow: inset 0px 0px 10px #fff, 0px 0px 5px #fff;
}
.previous, .next{
  cursor: pointer;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid var(--color-white);
  box-shadow: inset 0px 0px 10px #fff, 0px 0px 5px #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  transition: all 0.05s ease;
  &:hover{
    border: 2px solid #9b9b9b;
    box-shadow: inset 0px 0px 10px #5e5e5e, 0px 0px 5px #fff;
  }
  &:active{
    box-shadow: inset 0px 0px 10px #fff, 0px 0px 5px #fff;
  }
}
`
export const Slider:FC = ()=>{
  const previousHandler = ()=>{
    console.log('previous');
  }
  const nextHandler = ()=>{
    console.log('next');
  }
  return(
    <Styled>
      <button className="previous" onClick={previousHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg>
      </button>
      <div className="window"></div>
      <button className="next" onClick={nextHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
      </button>
    </Styled>
  )
}