import Modal from "react-modal";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import useResource from '../hooks/useResource';


export default function UpdateJobModal(props) {

  const { resources, udpateResource } = useResource();

  function handleUpdateJob(e) {

    e.preventDefault();

    const originalDate = e.target.date_applied.value;
    const parsedDateArr = originalDate.split('/');
    const parsedDate = `${parsedDateArr[2]}-${parsedDateArr[0]}-${parsedDateArr[1]}`;

    const info = {
      title: e.target.title.value,
      company: e.target.company.value,
      date_applied: parsedDate,
      method: e.target.method.value,
      cover_letter: e.target.cover_letter.value,
      referral: e.target.referral.value,
      notes: e.target.notes.value,
      first: false,
      second: false,
      third: false,
      rejected: false,
      offer: false,
      user: session.user.id,
    };

    // Add properties to the info object based on the input name
    if (e.target.first.checked) {
      info.first = true;
    }
    if (e.target.second.checked) {
      info.second = true;
    }
    if (e.target.third.checked) {
      info.third = true;
    }
    if (e.target.rejected.checked) {
      info.rejected = true;
    }
    if (e.target.offer.checked) {
      info.offer = true;
    }

    udpateResource(id, info)
    // onRequestClose()
    console.log(info)

  }



  return (
    <>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.toggleModal}
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
        <form onSubmit={() => handleUpdateJob(props.job.id)}>
          <label>
            Job Title
            <input
              type='text'
              defaultValue={props.job.title}
            >
            </input>
          </label>
          <button type="submit">Submit</button>
        </form>



      </Modal>
    </>
  )
}