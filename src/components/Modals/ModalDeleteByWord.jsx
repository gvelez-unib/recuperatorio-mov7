import { useState } from "react";
import { motion } from "motion/react";

const ModalDeleteByWord = ({ visible, onClose, onFoundWord, words }) => {
  const [inputWord, setInputWord] = useState("");

  const handleDelete = () => {
    const found = words.find(
      (word) =>
        word.spanish.toLowerCase() === inputWord.toLowerCase() ||
        word.english.toLowerCase() === inputWord.toLowerCase() ||
        word.portuguese.toLowerCase() === inputWord.toLowerCase()
    );
    if (found) {
      onFoundWord(found.id);
    } else {
      alert("Palabra no encontrada");
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-delete-word"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label>
            Ingrese la palabra a eliminar:
            <input
              type="text"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button onClick={handleDelete} className="buttons">
            Eliminar
          </button>
          <button onClick={onClose} className="buttons">
            Cancelar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalDeleteByWord;
