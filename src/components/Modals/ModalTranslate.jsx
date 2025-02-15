import { useState } from "react";
import { motion } from "motion/react";

const ModalTranslate = ({ visible, onClose, words }) => {
  const [inputWord, setInputWord] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("spanish");
  const [translation, setTranslation] = useState("");

  const handleTranslate = () => {
    const found = words.find(
      (word) =>
        word.spanish.toLowerCase() === inputWord.toLowerCase() ||
        word.english.toLowerCase() === inputWord.toLowerCase() ||
        word.portuguese.toLowerCase() === inputWord.toLowerCase()
    );
    if (found) {
      setTranslation(found[targetLanguage]);
    } else {
      setTranslation("Palabra no encontrada.");
    }
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-translate"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label>
            Palabra:
            <input
              type="text"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Traducir a:
            <select
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              <option value="spanish">Español</option>
              <option value="english">Inglés</option>
              <option value="portuguese">Portugués</option>
            </select>
          </label>
        </div>
        <button onClick={handleTranslate} className="buttons">
          Traducir
        </button>
        <div>
          <textarea readOnly value={translation} rows="3" cols="30" />
        </div>
        <button onClick={onClose} className="buttons">
          Cerrar
        </button>
      </motion.div>
    </div>
  );
};

export default ModalTranslate;
