import classes from "./App.module.css";
export const App =()=>{
  const onClickButton = () =>{
    alert('click it');
  }

  return (
    <>
      <h1 className={classes.titleText}>Hello React!!</h1>
      <p>ReactのApp.jsxから表示しています</p>
      <button onClick={onClickButton}  className={classes.btnLrg}>クリック</button>
    </>
  );
}