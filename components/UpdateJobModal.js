import Modal from "react-modal";
import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import useResource from '../hooks/useResource';
import { format, parseISO } from 'date-fns';


export default function UpdateJobModal(props) {

  const { updateResource } = useResource();
  const { data: session } = useSession()
  const [selectedValue, setSelectedValue] = useState('choose');
  const user = session.auth_token.user_id;

  // Getting date_applied from DB and converting it to a prettier format:
  const originalDate = props.job.date_applied;
  const parsedDate = parseISO(originalDate);
  const formattedDate = format(parsedDate, 'MMMM d, yyyy');

  // Getting the existing true/false values for job status from DB:
  const [cover_letter, setCoverLetter] = useState(props.job.cover_letter);
  const [referral, setReferral] = useState(props.job.referral);

  const [first, setFirst] = useState(props.job.first);
  const [second, setSecond] = useState(props.job.second);
  const [third, setThird] = useState(props.job.third);
  const [rejected, setRejected] = useState(props.job.rejected);
  const [offer, setOffer] = useState(props.job.offer);

  function handleUpdateJob(id, e) {

    e.preventDefault();
    const { target } = e;

    const info = {
      title: e.target.title.value,
      company: e.target.company.value,
      method: e.target.method.value,
      cover_letter: cover_letter,
      referral: referral,
      notes: e.target.notes.value,
      first: first,
      second: second,
      third: third,
      rejected: rejected,
      offer: offer,
      user: user,
    };

    updateResource(id, info);
    props.toggleModal();
    console.log(info)
  }

  function handleCoverLetterChange(e) {
    setCoverLetter(e.target.checked);
  }

  function handleReferralChange(e) {
    setReferral(e.target.checked);
  }

  function handleFirstChange(e) {
    setFirst(e.target.checked);
  }

  function handleSecondChange(e) {
    setSecond(e.target.checked);
  }

  function handleThirdChange(e) {
    setThird(e.target.checked);
  }

  function handleRejectedChange(e) {
    setRejected(e.target.checked);
  }

  function handleOfferChange(e) {
    setOffer(e.target.checked);
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
              <h1 className="text-3xl">Update Job</h1>
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
                onSubmit={(e) => handleUpdateJob(props.job.id, e)}
                className="flex mx-10 p-6 bg-blue-800 border border-blue-900 justify-center text-lg"
              >
                <fieldset className='w-11/12 flex flex-col items-center'>

                  <p>Date Applied: {formattedDate}</p>

                  <h3 className='text-white p-1'>Job Title</h3>
                  <input type='text' name='title' id='title' className='content-center mx-2 my-2 p-0.5' defaultValue={props.job.title} />

                  <h3 className='text-white p-1'>Company</h3>
                  <input type='text' name='company' id='company' className='content-center mx-2 my-2 w-6/12 p-0.5' defaultValue={props.job.company} />

                  <label className='text-white p-1'>
                    Did you write a cover letter?
                    <input
                      className="ml-1 mr-4"
                      type="checkbox"
                      checked={cover_letter}
                      onChange={handleCoverLetterChange}
                    />
                  </label>

                  <label className='text-white p-1'>
                    Did you have a referral?
                    <input
                      className="ml-1 mr-4"
                      type="checkbox"
                      checked={referral}
                      onChange={handleReferralChange}
                    />
                  </label>

                  <h3 className='text-white p-1'>Notes</h3>
                  <textarea
                    className='content-center mx-2 my-2  p-0.5'
                    name='notes'
                    id='notes'
                    defaultValue={props.job.notes}
                    rows="1" // start with one row
                    style={{ resize: 'vertical', minHeight: '50px' }} // set the minimum height and allow vertical resizing
                  />

                  <div className='text-white flex flex-col content-center text-center'>
                    <h3 className='text-xl'>Application Status</h3>
                    <div className="flex flex-wrap justify-evenly">
                      <label>
                        First Interview
                        <input
                          className="ml-1 mr-4"
                          type="checkbox"
                          checked={first}
                          onChange={handleFirstChange}
                        />
                      </label>
                      <label>
                        Second Interview
                        <input
                          className="ml-1 mr-4"
                          type="checkbox"
                          checked={second}
                          onChange={handleSecondChange}
                        />
                      </label>
                      <label>
                        Third Interview
                        <input
                          className="ml-1 mr-4"
                          type="checkbox"
                          checked={third}
                          onChange={handleThirdChange}
                        />
                      </label>
                      <label>
                        Rejected &#128546;
                        <input
                          className="ml-1 mr-4"
                          type="checkbox"
                          checked={rejected}
                          onChange={handleRejectedChange}
                        />
                      </label>
                      <label>
                        Offer Received! &#129321;
                        <input
                          className="ml-1 mr-4"
                          type="checkbox"
                          checked={offer}
                          onChange={handleOfferChange}
                        />
                      </label>
                    </div>

                  </div>

                  <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Save Changes</button>

                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}