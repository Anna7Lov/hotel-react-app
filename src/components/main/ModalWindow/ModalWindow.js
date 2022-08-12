import React, { useState } from "react";
import Modal from 'react-modal';
import BookingForm from "../BookingForm/BookingForm";

import './ModalWindow.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    border: '1px solid #1B75BB',
  },
};

Modal.setAppElement("#root");

export default function ModalWindow({options, selected, handleChange}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='button' onClick={openModal}>Book now</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <BookingForm additionalClass='modal-form' options={options} selected={selected} handleChange={handleChange}/>
        <button className='close-button' onClick={closeModal}></button>
      </Modal>
    </div>
  );
}
