import { useState } from "react";

const Dropdown = () => {

  // creating string array
  const [isActive, setActive] = useState(false);
  const [list] = useState(['Yes', 'Probably Not', 'May Be', 'No']);
  const [value, setValue] = useState('');

  // on click handler
  const onClickHandeler = (e) => {
    setValue(e.target.textContent);
    setActive(false);
  }

  // on mouse cursor hover on select button display list
  const onMouseHover = () => {
    setActive(true);
  }

  // if mouse cursor is off the list hide the list
  const onMouseOver = () => {
    setActive(false);
  }

  const results = list.map((result, index) => {
    return <a href="#" onClick={onClickHandeler} key={index}>{result}</a>;
  })

  return (
    // dropdown container
    <div className="container" onMouseLeave={onMouseOver}>
      <h1>Should you use a Dropdown ?</h1>
      <h3>{value}</h3>
      <button className="select-btn" onMouseEnter={onMouseHover}>Select</button>
      <div className="container-content" style={{ display: `${isActive ? 'block' : 'none'}` }}>
        {results}
      </div>
    </div>
  );
}

export default Dropdown;