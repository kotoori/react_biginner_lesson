import { useContext } from "react";
import { Login } from "./components/Login";
import { LoginFlagContext } from "./components/LoginFlagProvider";

export const App = () =>{
  //Contextから現在のログイン状態を取得する
  const { isLogin, setIsLogin } = useContext(LoginFlagContext);

  //ログインとログアウトを切り替えるボタンハンドラ
  const onClickLogin = () =>{
    setIsLogin(!isLogin); //ログイン状態を切り替える
  }

  //return内で{}内はJSが記述できる
  return(
    <div>
      {isLogin ? <p>ログインしています</p> : <p>ログアウト状態です</p>}
      <button onClick={onClickLogin}>{isLogin ? 'ログアウト' : 'ログイン'}</button>
      <Login isLogin={isLogin} />
    </div>
  )
}