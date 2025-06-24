import { useState, useEffect, useCallback } from "react";
import { ChildComp1 } from "./components/ChildComp1";
import { ChildComp4 } from "./components/ChildComp4";

export const App = () =>{
  console.log("Appの描画");
  const [num,setNum] = useState(0);

  const onClickButton = () =>{
    setNum(num + 1);
  }

  const onClickResetButton = useCallback(() =>{
    setNum(0);
  },[]);

  //numが変化したときにAlertを表示
  useEffect(() =>{
    alert("numが変化しました");
  },[num]);

  return (
    <>
      <button onClick={onClickButton}>クリック</button>
      <p>{num}回クリックされました</p>
      <ChildComp1 onClickResetButton={onClickResetButton}></ChildComp1>
      <ChildComp4></ChildComp4>
    </>
  )
}

export default App;
