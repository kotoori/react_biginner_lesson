/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const baseStyle = css`
  padding:10px 20px;
  border:none;
  border-radius:4px;
  cursor:pointer;
`;
const primaryStyle = css`
  background-color:#00f;
  color:#fff;
  &:hover{
    background-color:#f00;
  }
`;
const secondaryStyle = css`
  background-color:#09f;
  color:#fff;
  &:hover{
    background-color:#f90;
  }
`;

export const Button = ({ primary })=>{
  return (
    <button css={[baseStyle,primary ? primaryStyle : secondaryStyle]}>Click Me!</button>
  );
};