function FlowerButton(props) {
  return (
    <button className="flowerButton" type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default FlowerButton;