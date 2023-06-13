import "../../styles/common/Modal.css";

export default function Modal({ setModal, data }) {
  const { title = "잘못된 불러오기", contents = [] } = data;

  return (
    <article
      className="modal-container"
      tabIndex={0}
      onKeyDown={(e) => {
        console.log(e.key);
        // if (e.key === "Escape") setModal(false);
      }}
    >
      <section className="modal">
        <h2>{title}</h2>
        <ul>
          {contents.map((content, idx) => (
            <li key={`modal-${idx}`}>{content}</li>
          ))}
        </ul>
        <button className="close" onClick={() => setModal(false)}>
          닫기 X
        </button>
      </section>
    </article>
  );
}
