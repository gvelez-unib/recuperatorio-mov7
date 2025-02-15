// src/components/Diccionario.jsx
import { useState } from "react";
import { motion } from "motion/react";
import { useSelector, useDispatch } from "react-redux";
import { addWord, updateWord, deleteWord } from "../store/features/dictionary/dictionarySlice";
import useForm from "../components/Hooks/useForm";
import ModalTranslate from "../components/Modals/ModalTranslate";
import ModalDeleteByWord from "../components/Modals/ModalDeleteByWord";
import ModalConfirmDelete from "../components/Modals/ModalConfirmDelete";
import "./Diccionario.css"; 

const Diccionario = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.dictionary.words);

  
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [showTranslateModal, setShowTranslateModal] = useState(false);
  const [showDeleteByWordModal, setShowDeleteByWordModal] = useState(false);
  
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [wordToDeleteId, setWordToDeleteId] = useState(null);

  const initialFormState = {
    spanish: "",
    english: "",
    portuguese: ""
  };

  const { formData, handleChange, resetForm, setFormData } = useForm(initialFormState);

  const openAddModal = () => setShowModal(true);

  const closeAddModal = () => {
    setShowModal(false);
    setEditMode(false);
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateWord({ id: currentId, ...formData }));
    } else {
      dispatch(addWord({ id: Date.now(), ...formData }));
    }
    closeAddModal();
  };

  const handleEdit = (word) => {
    setEditMode(true);
    setCurrentId(word.id);
    setFormData({
      spanish: word.spanish,
      english: word.english,
      portuguese: word.portuguese,
    });
    openAddModal();
  };

  const handleFoundWordForDeletion = (id) => {
    setWordToDeleteId(id);
    setShowDeleteByWordModal(false);
    setShowConfirmDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (wordToDeleteId) {
      dispatch(deleteWord(wordToDeleteId));
      setWordToDeleteId(null);
    }
    setShowConfirmDeleteModal(false);
  };

  return (
    <div className="diccionario-container">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Diccionario
      </motion.h2>

      <div className="button-group">
        <button onClick={openAddModal} className="buttons">
          Agregar
        </button>
        <button onClick={() => setShowTranslateModal(true)} className="buttons">
          Traducir
        </button>
        <button onClick={() => setShowDeleteByWordModal(true)} className="buttons">
          Eliminar
        </button>
      </div>

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="modal-overlay"
        >
          <div className="modal-content">
            <h3>{editMode ? "Editar Palabra" : "Agregar Palabra"}</h3>
            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label>
                  Español:
                  <input
                    type="text"
                    name="spanish"
                    value={formData.spanish}
                    onChange={handleChange}
                    required
                  />
                </label>
              </motion.div>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label>
                  Inglés:
                  <input
                    type="text"
                    name="english"
                    value={formData.english}
                    onChange={handleChange}
                    required
                  />
                </label>
              </motion.div>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label>
                  Portugués:
                  <input
                    type="text"
                    name="portuguese"
                    value={formData.portuguese}
                    onChange={handleChange}
                    required
                  />
                </label>
              </motion.div>
              <div className="modal-buttons">
                <button type="submit" className="buttons">
                  {editMode ? "Actualizar" : "Agregar"}
                </button>
                <button type="button" onClick={closeAddModal} className="buttons">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}

      <ModalTranslate
        visible={showTranslateModal}
        onClose={() => setShowTranslateModal(false)}
        words={words}
      />

      <ModalDeleteByWord
        visible={showDeleteByWordModal}
        onClose={() => setShowDeleteByWordModal(false)}
        onFoundWord={handleFoundWordForDeletion}
        words={words}
      />

      <ModalConfirmDelete
        visible={showConfirmDeleteModal}
        message="¿Está seguro de eliminar esta palabra?"
        onClose={() => setShowConfirmDeleteModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Diccionario;
