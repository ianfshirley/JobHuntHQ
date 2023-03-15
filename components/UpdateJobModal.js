import Modal from "react-modal";
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
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
      cover_letter: e.target.cover_letter.value,
      referral: e.target.referral.value,
      notes: e.target.notes.value,
      first: first,
      second: second,
      third: third,
      rejected: rejected,
      offer: offer,
      user: user,
    };

    updateResource(id, info);
    // onRequestClose()
    console.log(info)
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
        onRequestClose={props.toggleModal}
        contentLabel="Example Modal"
        // overlayClassName="overlay"
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
                className="flex mx-10 p-6 bg-blue-800 border border-blue-900 justify-center"
              >
                <fieldset className='w-11/12 flex flex-col items-center'>

                  <p>Date Applied: {formattedDate}</p>

                  <h3 className='text-white p-1'>Job Title</h3>
                  <input type='text' name='title' id='title' className='content-center mx-2 my-2 p-0.5' defaultValue={props.job.title} />

                  <h3 className='text-white p-1'>Company</h3>
                  <input type='text' name='company' id='company' className='content-center mx-2 my-2 w-6/12 p-0.5' defaultValue={props.job.company} />

                  {/* <h3 className='text-white p-1'>Date Applied</h3>
                  <DatePicker name='date_applied' id='date_applied' showIcon selected={formattedDate} onChange={(date) => setStartDate(date)} className="pl-2" /> */}

                  <h3 className='text-white p-1'>Did you write a cover letter?</h3>
                  <input type='text' name='cover_letter' id='cover_letter' className='content-center mx-2 my-2 w-6/12 p-0.5' defaultValue={props.job.cover_letter} />

                  <h3 className='text-white'>Did you have a referral? If so, who were they?</h3>
                  <input type='text' name='referral' id='referral' className='content-center mx-2 my-2 p-0.5' defaultValue={props.job.referral} />

                  <h3 className='text-white p-1'>Notes</h3>
                  <textarea
                    className='content-center mx-2 my-2  p-0.5'
                    name='notes'
                    id='notes'
                    defaultValue={props.job.notes}
                    rows="1" // start with one row
                    style={{ resize: 'vertical', minHeight: '50px' }} // set the minimum height and allow vertical resizing
                  />

                  <div>
                    <h3 className='text-white'>Application Status</h3>
                    <label>
                      First Interview
                      <input
                        type="checkbox"
                        checked={first}
                        onChange={handleFirstChange}
                      />
                    </label>
                    <label>
                      Second Interview
                      <input
                        type="checkbox"
                        checked={second}
                        onChange={handleSecondChange}
                      />
                    </label>
                    <label>
                      Third Interview
                      <input
                        type="checkbox"
                        checked={third}
                        onChange={handleThirdChange}
                      />
                    </label>
                    <label>
                      Rejected
                      <input
                        type="checkbox"
                        checked={rejected}
                        onChange={handleRejectedChange}
                      />
                    </label>
                    <label>
                      Offer Received!
                      <input
                        type="checkbox"
                        checked={offer}
                        onChange={handleOfferChange}
                      />
                    </label>
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