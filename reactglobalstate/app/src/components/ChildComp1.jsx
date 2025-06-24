import { ChildComp2 } from "./ChildComp2";
import { ChildComp3 } from "./ChildComp3";

export const ChildComp1 = (props) =>{
  console.log("ChildComp1のレンダリング");

  const { onClickResetButton } = props;
  return (
    <div>
      <p>ChildComp1</p>
      <button onClick={onClickResetButton}>回数をリセット</button>
      <ChildComp2></ChildComp2>
      <ChildComp3></ChildComp3>
    </div>
  );
};