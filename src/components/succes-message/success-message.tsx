import ModalWindow from '../modal-window/modal-window';
import './success-message.css';

type MessageProps = {
  active: boolean;
  setActive: () => void;
}

function SuccessMessage({active, setActive}: MessageProps): JSX.Element {
  return (
    <ModalWindow active={active} setActive={setActive}>
      <div className="success-message">
        <p className="success-message__text">Ваш заказ успешно оформлен</p>
        <svg className="success-message__image" height="80px" width="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
          	<path d="M469.402,35.492C334.09,110.664,197.114,324.5,197.114,324.5L73.509,184.176L0,254.336l178.732,222.172
          		l65.15-2.504C327.414,223.414,512,55.539,512,55.539L469.402,35.492z" fill="currentColor" />
          </g>
        </svg>
        <button className="success-message__button" onClick={setActive}>Ок</button>
      </div>
    </ModalWindow>
  )
}

export default SuccessMessage;