import Popup from "./Popup";
import successImage from "../images/success.png";
import errorImage from "../images/fail.png";

export default function InfoTooltip({ open, close, message, type }) {
  return (
    <>
      <Popup open={open}>
        <div>
        <button className="popup__close-btn" onClick={close}></button>
          <img
            src={
              type === "success" ? successImage : errorImage
            }
            alt="Message"
          />
          <p>{message}</p>
        </div>
      </Popup>
    </>
  );
}
