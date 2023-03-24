import useResource from "@/hooks/useResource"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import Modal from "react-modal";


export default function AddJobModal(props) {

  const { createResource } = useResource();
  const [startDate, setStartDate] = useState(new Date());
  const { data: session } = useSession()
  const [selectedValue, setSelectedValue] = useState('choose');
  const user = session.auth_token.user_id;

  useEffect(() => {
    if (props.isModalOpen) {
      setCoverLetter(false);
      setReferral(false);
      setStartDate(new Date());
      setSelectedValue('choose');
    }
  }, [props.isModalOpen]);

  const [cover_letter, setCoverLetter] = useState(false);
  const [referral, setReferral] = useState(false);

  function handleCreateJob(e) {

    e.preventDefault()

    const originalDate = e.target.date_applied.value;
    const parsedDateArr = originalDate.split('/');
    const parsedDate = `${parsedDateArr[2]}-${parsedDateArr[0]}-${parsedDateArr[1]}`;

    console.log(originalDate)

    const info = {
      title: e.target.title.value,
      company: e.target.company.value,
      date_applied: parsedDate,
      method: e.target.method.value,
      cover_letter: cover_letter,
      referral: referral,
      notes: e.target.notes.value,
      first: false,
      second: false,
      third: false,
      rejected: false,
      offer: false,
      user: user,
    };
    createResource(info);
    console.log(info);
    props.toggleModal();

  }

  function handleCoverLetterChange(e) {
    setCoverLetter(e.target.checked);
  }

  function handleReferralChange(e) {
    setReferral(e.target.checked);
  }

  return (
    <>

      <Modal
        isOpen={props.isModalOpen}
        toggleModal={props.toggleModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
      >

        <div className="relative w-auto my-6 mx-auto max-w-3xl">

          {/* Modal Content: */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

            {/* Modal Header: */}
            <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h1 className="text-3xl">Add a Job</h1>
              <button
                className="absolute px-2 text-lg font-bold text-center transition-all duration-300 border border-white rounded-md top-4 right-4 hover:text-red-500 hover:border-red-500 text-violet-700"
                onClick={props.toggleModal}
              >
                X
              </button>
            </div>

            {/* Modal Body: */}
            <div className="relative p-6 flex-auto">

              <form
                onSubmit={handleCreateJob}
                className="flex  my-16 bg-blue-800/50 border border-blue-900 h-3/4 place-contents-center"
              >
                <fieldset className='w-11/12 place-contents-center'>

                  <label className=''>
                    Job Title
                    <input type='text' name='title' id='title' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='ex: Software Developer' />
                  </label>

                  <label className=''>
                    Company
                    <input type='text' name='company' id='company' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='ex: Code Fellows' />
                  </label>

                  <label className=''>
                    Date Applied
                    <DatePicker name='date_applied' id='date_applied' showIcon selected={startDate} onChange={(date) => setStartDate(date)} className="pl-2" />
                  </label>

                  <label className=''>
                    How did you apply?
                    <select
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    name='method'
                    id='method'
                    className='content-center mx-2 my-2 w-6/12 p-0.5'>
                    <option value='choose' disabled>Choose One</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="indeed">Indeed</option>
                    <option value="otta">Otta</option>
                    <option value="company_website">Company Website</option>
                    <option value="other">Other</option>
                    </select>
                  </label>

                  <label className=''>
                    Did you write a cover letter?
                    <input
                      className="ml-1 mr-4"
                      type="checkbox"
                      checked={cover_letter}
                      onChange={handleCoverLetterChange}
                    />
                  </label>

                  <label className=''>
                    Did you have a referral?
                    <input
                      className="ml-1 mr-4"
                      type="checkbox"
                      checked={referral}
                      onChange={handleReferralChange}
                    />
                  </label>

                  <label className=''>
                    Notes
                    <textarea
                      className='content-center mx-2 my-2  p-0.5'
                      name='notes'
                      id='notes'
                      rows="1" // start with one row
                      style={{ resize: 'vertical', minHeight: '50px' }} // set the minimum height and allow vertical resizing
                    />
                  </label>

                  <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Add New Application</button>

                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}