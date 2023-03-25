import Modal from "react-modal";
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import useResource from '../hooks/useResource';
import { parseISO } from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function UpdateJobModal(props) {

  const { updateResource } = useResource();
  const { data: session } = useSession()
  const [selectedValue, setSelectedValue] = useState(props.job.method);
  const user = session.auth_token.user_id;

  // Convert the original date to a Date object
  const originalDate = props.job.date_applied;
  const date = parseISO(originalDate);

  const [startDate, setStartDate] = useState(date); // Initialize with the parsed date

  useEffect(() => {
    if (props.isModalOpen) {
      setCoverLetter(false);
      setReferral(false);
      setStartDate(parseISO(props.job.date_applied));
      setSelectedValue(props.job.method)
    }
  }, [props.isModalOpen, props.job.date_applied, props.job.method]);

  // useEffect(() => {

  //   setStartDate(parseISO(props.job.date_applied));
  //   setSelectedValue(props.job.method)
  // }, [props.job.date_applied]);

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

    const originalDate = e.target.date_applied.value;
    const parsedDateArr = originalDate.split('/');
    const parsedDate = `${parsedDateArr[2]}-${parsedDateArr[0]}-${parsedDateArr[1]}`;

    const info = {
      title: e.target.title.value,
      company: e.target.company.value,
      date_applied: parsedDate,
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
        className='justify-center items-center flex fixed overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none font-montserrat'
      >

        <div className="relative w-auto mx-auto">

          {/* Modal Content: */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-cream outline-none focus:outline-none">

            {/* Modal Header: */}
            <div className="text-center p-5 rounded-t">
              <h1 className="text-3xl text-twilight font-semibold">Update Job</h1>
              <button
                className="absolute px-2 text-lg font-bold text-center transition-all duration-300 border border-cream rounded-md top-4 right-4 hover:text-red-500 hover:border-red-500 text-dusk"
                onClick={props.toggleModal}
              >
                X
              </button>
            </div>

            {/* Modal Body: */}
            <div className="relative m-8 p-2 flex-auto text-dusk rounded-lg bg-cornflower shadow-lg shadow-twilight">

              <form
                onSubmit={(e) => handleUpdateJob(props.job.id, e)}
                className="grid grid-cols-2 grid-rows-8 text-lg font-semibold bg-cornflower border-4 border-cream shadow-sm shadow-twilight items-center m-2 p-2"
              >

                <label className='flex justify-evenly items-center col-start-1 col-span-2 row-start-1 row-span-1'>
                  Job Title
                  <input type='text' name='title' id='title' className='content-center m-2 w-2/3 px-2 py-0.5' defaultValue={props.job.title} />
                </label>

                <label className='flex justify-evenly items-center col-start-1 col-span-2 row-start-2 row-span-1'>
                  Company
                  <input type='text' name='company' id='company' className='content-center m-2 w-2/3 px-2 py-0.5' defaultValue={props.job.company} />
                </label>

                <label className='flex whitespace-nowrap justify-evenly items-center col-span-1 row-start-3 row-span-1 ml-2'>
                  Date Applied
                  <DatePicker
                    name='date_applied'
                    id='date_applied'
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)} className="ml-4 text-center" />
                </label>

                <label className='flex justify-center items-center col-start-2 col-span-1 row-start-3 row-span-1'>
                  How did you apply?
                  <select
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    name='method'
                    id='method'
                    className='content-center mx-4 my-2 px-2 py-0.5'>
                    <option value='choose' disabled>Choose One</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="indeed">Indeed</option>
                    <option value="otta">Otta</option>
                    <option value="company_website">Company Website</option>
                    <option value="other">Other</option>
                  </select>
                </label>

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


              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}