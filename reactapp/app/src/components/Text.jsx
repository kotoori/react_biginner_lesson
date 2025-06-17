export const Text = (props) =>{
  const textStyle = {
    color:props.color,
    fontSize:"20px"
  }
  return(
    <p style={textStyle}>{props.message}</p>
  );
}
