interface Props {
  message: string;
  closeModal: (params: { show: boolean, message: string }) => void;
}

const Modal = ({ message, closeModal }: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">{message}</div>{" "}
        <div className="modal-footer">
          <button onClick={() => closeModal({ show: false, message: "" })}>
            {" "}
            Close{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
