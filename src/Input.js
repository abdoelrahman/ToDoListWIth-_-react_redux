
 const Input = (props) => {

  return (<input
    type="Number" 
    // style={inputStyle}
    onChange={() =>props.changed.bind()}
    value={props.n}
     />)
};
export default Input;
