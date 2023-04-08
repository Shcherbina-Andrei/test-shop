import './modal-window.css';

type ModalProps = {
  children: React.ReactNode;
  active: boolean;
  setActive: () => void;
}

function ModalWindow({children, active, setActive}: ModalProps) {
  return (
    <div className={active ? 'modal modal--active' : 'modal'}>
      <div className={`modal__content ${active ? 'modal__content--active' : ''}`} onClick={(evt) => evt.stopPropagation()}>
        <button className="modal__close-button" type="button" onClick={setActive}>
          <span className="visually-hidden">
            Close
          </span>
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;