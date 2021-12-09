function FlowerButton(props) {
  return (
    // onClick calls function in parent
    <button className="flowerButton" type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default FlowerButton;