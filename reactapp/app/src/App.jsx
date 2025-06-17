/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const buttonStyle = css`
  background-color: #f90;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.5s ease;
  &:hover{
    background-color: #f00;
  }
`;

export const App = ()=>{
  return(
    <>
      <button css={buttonStyle}>クリックしてください</button>
    </>
  );
};
