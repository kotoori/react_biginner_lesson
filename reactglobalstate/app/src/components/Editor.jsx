import { useContext } from "react";
import { LoginFlagContext } from "./LoginFlagProvider";

export const Editor = (props)=>{
  const { isLogin } = useContext(LoginFlagContext);
  console.log(isLogin);

  return (
    <textarea disabled={!isLogin}></textarea>
  );
}