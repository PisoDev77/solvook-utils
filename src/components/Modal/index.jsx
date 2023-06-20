import "./modal.css";

import { useState } from "react";

import Button from "../Button";
import { CloseButton } from "../Button/Button.stories";

export default function Modal({ title, contentList = [] }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* prettier-ignore */}
      <Button type="modal-button" onClick={()=>{setModal(true)}}>{title}</Button>

      {
        // prettier-ignore
        modal 
        ? 
        (<section 
          className="modal2" 
          data-modal={false} 
          onClick={(e)=>{ if(!!e.target.dataset?.modal) setModal(false); }}>
          <ul className="modal-contents">
            <h3>{title}</h3>
            {contentList.map(({ content, description }) => (
              <li className="modal-content">
                <h4 className="content">{content}</h4>
                <div className="description">{description}</div>
              </li>
            ))}
            {/* prettier-ignore */}
            <Button 
              onClick={() => {setModal(false);}} 
              {...CloseButton.args}>
                X
            </Button>
          </ul>
        </section>) : (<></>)
      }
    </>
  );
}
