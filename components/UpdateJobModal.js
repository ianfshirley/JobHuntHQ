import Modal from "react-modal";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { useSession } from "next-auth/react";


export default function UpdateJobModal(props) {



console.log('here is the props in modal: ', props);
  return (
    <>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.toggleModal}
        // job={props.job}
        // key={props.job.id}
        contentLabel="Example Modal"
        overlayClassName="overlay"
        ariaHideApp={false}
        className=""
      >
        <h1 className="text-3xl">Update Job Form Coming Soon!</h1>
        <button
          className="absolute px-2 text-lg font-bold text-center transition-all duration-300 border border-white rounded-md top-4 right-4 hover:text-red-500 hover:border-red-500 text-violet-700"
          onClick={props.toggleModal}
        >
          X
        </button>

        {/* <p>{props.job.title}</p> */}

      </Modal>
    </>
  )
}