import ReactDOMClient from "react-dom/client";
import { Button } from "./Button";//保存したButton.jsxを読み込む

export const App = () =>{
  return (
    <div>
      <Button primary={true}></Button>
      <Button primary={false}></Button>
    </div>
  );
};