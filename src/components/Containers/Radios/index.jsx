import { useState } from "react";

import "./radios.css";

export default function Radios({ radios = [], setToggle, toggle }) {
  const [selected, setSelected] = useState(radios[0] ?? "");

  return (
    <div className="radios">
      {radios.map(({ label, id }, idx) =>
        // prettier-ignore
        <span className="radio-container">
          <label htmlFor={id}>{label}</label>
          <input type="radio" id={id} name="toggle" value={idx}
            checked={+toggle === idx}
            onChange={(e) => { setToggle(e.target.value); }} />
        </span>
      )}
    </div>
  );
}
