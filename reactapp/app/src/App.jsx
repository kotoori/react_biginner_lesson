/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  color:#09f;
`;

export const App = ()=>{
  return(
    <>
      <StyledDiv>スタイルの適用された文字</StyledDiv>
      <StyledDiv>aaaaaaaa</StyledDiv>
    </>
  );
};
