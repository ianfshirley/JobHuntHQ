import { GoX, GoChevronDown } from 'react-icons/go';
import { Collapse } from 'react-collapse';
import useResource from '@/hooks/useResource';
import React, { useState } from 'react';


export default function AccordionItem({ open, toggleAccordionItem, title, company, date_applied, method, cover_letter, referral, notes, first, second, third, rejected, offer, job, openUpdateModal, toggleModal }) {

  const { resources, deleteResource } = useResource();

  function handleDeleteJob() {
    const confirmed = window.confirm(`Are you sure you want to delete ${title} at ${company}?`)

    if (confirmed) {
      deleteResource(job.id);
      console.log('Job deleted');
    } else {
      console.log('Job not deleted');
    }
  }

  return (
    <div className="border border-solid border-black">
      <div
        className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggleAccordionItem}
      >
        <p className="text-[22px] font-semibold">{title} at {company}</p>
        <div className="text-[30px]">
          {open ? <GoX /> : <GoChevronDown />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className=''>
          <p>Date Applied: {date_applied}</p>
          <p>Method of Application: {method}</p>
          <p>Did you write a cover letter? {cover_letter}</p>
          <p>Did you have a referral? {referral}</p>
          <p>Notes: {notes}</p>
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mb-2 w-32"
            onClick={() => openUpdateModal(job)}
          >
            Update
          </button>
          <button
            className="text-white bg-gradient-to-br from-pink-300 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2 w-32"
            onClick={() => handleDeleteJob()}
          >
            Delete
          </button>
        </div>

      </Collapse>

    </div>
  )
}