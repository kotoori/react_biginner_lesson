export const App =()=>{
  const onClickButton = () =>{
    alert('click it');
  }

  return (
    <>
      <h1>Hello React!!</h1>
      <p>ReactのApp.jsxから表示しています</p>
      <button onClick={onClickButton}>クリック</button>
    </>
  );
}