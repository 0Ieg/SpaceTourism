import { FC } from 'react';
import styled from 'styled-components';

const NewsS = styled.section`
height: 100dvh;
display: flex;
align-items: center;
`
export const News: FC = () => {
  return (
    <NewsS>
      <div className='bi'></div>
      NewsS
    </NewsS>
  )
}