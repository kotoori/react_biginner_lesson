import { useState, createContext } from "react";

export const LoginFlagContext = createContext({
  isLogin:false,
  setIsLogin:() => {}
});

export const LoginFlagProvider =(props) =>{
  const { children } = props;

  const [isLogin,setIsLogin] = useState(false);

  return(
    <LoginFlagContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginFlagContext.Provider>
  );
};
