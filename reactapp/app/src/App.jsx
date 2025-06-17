import ReactDOMClient from "react-dom/client";
import { useState } from 'react';
import classes from './App.module.css';
import { Text } from './components/Text'; //Text.jsxを読み込む
import { Button } from "./Button";//保存したButton.jsxを読み込む


export const App = () =>{
  const onclickButton = () =>{
    setNum((prev) => prev + 1); //現在の値に1をプラス
  }
  const [num, setNum] = useState(0);//numの初期値を0で設定する（設定しないと初期値undefinedになる）

  return (
    <>
      <h1 className={classes.titleText}>useStateを利用</h1>
      <Text color="#09f" message="text.jsxから表示しています"></Text>
      <button onClick={onclickButton} className={classes.btnLrg}>クリックした回数：{num}</button>
    </>
  );
};