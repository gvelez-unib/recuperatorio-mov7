
import { motion } from "motion/react";


const ModalConfirmDelete = ({ visible, message, onClose, onConfirm }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-confirm-delete"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p>{message}</p>
        </div>
        <button
          className="close-btn"
          onClick={onClose}
        >
          X
        </button>
        <button
          className="btn-confirm"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          SI
        </button>
        <button
          className="btn-cancel"
          onClick={onClose}
        >
          NO
        </button>
      </motion.div>
    </div>
  );
};

export default ModalConfirmDelete;
