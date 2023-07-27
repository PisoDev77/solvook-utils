import "./popup.css";

import Btn from "../Btn";
import { useState } from "react";
import { CloseBtn, ModalBtn } from "../Btn/Btn.stories";

export default function Popup({ children, collections, ...args }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Btn
        {...ModalBtn.args}
        onClick={() => {
          setVisible(true);
        }}
      >
        {children}
      </Btn>
      {visible ? (
        <section
          className="popup-container"
          onClick={(e) => {
            if (e.target.className === "popup-container") setVisible(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setVisible(false);
          }}
        >
          <div className="popup" tabIndex={0}>
            <Btn {...CloseBtn.args} onClick={() => setVisible(false)}>
              X
            </Btn>
            <ul>
              {collections.map((collection) => (
                <li>{collection}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
