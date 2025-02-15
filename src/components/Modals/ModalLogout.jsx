import { motion } from "motion/react"

// eslint-disable-next-line react/prop-types
const ModalLogout = ({ visible, message, onClose, onLogout }) => {
    if (!visible) {
        return null;
    }
    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-logout"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <p>{message}</p>
                </div>
                <button
                    className="close-btn-logout"
                    onClick={onClose}>
                    X
                </button>
                <button
                    className="btn-si"
                    onClick={() => {
                        onLogout(); 
                        onClose(); 
                    }}
                >
                    SI
                </button>
                <button
                    className="btn-no"
                    onClick={onClose}>
                    NO
                </button>
            </motion.div>
        </div>
    );
};

export default ModalLogout;