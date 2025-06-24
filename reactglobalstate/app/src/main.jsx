import ReactDOMClient from "react-dom/client";
import { App } from "./App";
import { LoginFlagProvider } from "./components/LoginFlagProvider";

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
//LoginFlagProviderでラップすることで、Appコンポーネント内のどのコンポーネントからもContextが使えるようになる
root.render(
  <LoginFlagProvider>
    <App />
  </LoginFlagProvider>
);