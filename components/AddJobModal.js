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
        className='justify-center items-center flex fixed overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none font-montserrat'
      >

        <div className="relative w-auto mx-auto ">

          {/* Modal Content: */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-cream outline-none focus:outline-none">

            {/* Modal Header: */}
            <div className="text-center p-5 rounded-t">
              <h1 className="text-3xl text-twilight font-semibold">Add a Job</h1>
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
                onSubmit={handleCreateJob}
                className="grid grid-cols-2 grid-rows-6 text-lg font-semibold bg-cornflower border-4 border-cream shadow-sm shadow-twilight items-center m-2 p-2"
              >


                  <label className='flex justify-evenly items-center col-start-1 col-span-2 row-start-1 row-span-1'>
                    Job Title
                    <input type='text' name='title' id='title' className='content-center m-2 w-2/3 px-2 py-0.5' placeholder='ex: Software Developer' />
                  </label>

                  <label className='flex justify-evenly items-center col-start-1 col-span-2 row-start-2 row-span-1'>
                    Company
                    <input type='text' name='company' id='company' className='content-center m-2 w-2/3 px-2 py-0.5' placeholder='ex: Code Fellows' />
                  </label>

                  <label className='flex whitespace-nowrap justify-evenly items-center col-span-1 row-start-3 row-span-1 ml-2'>
                    Date Applied
                    <DatePicker name='date_applied' id='date_applied' showIcon selected={startDate} onChange={(date) => setStartDate(date)} className="ml-4 text-center" />
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

                  <label className='flex justify-center items-center col-span-1 row-start-4 row-span-1'>
                    Did you write a cover letter?
                    <input
                      className="mx-4 w-4 h-4 bg-cream border-dusk rounded"
                      type="checkbox"
                      checked={cover_letter}
                      onChange={handleCoverLetterChange}
                    />
                  </label>

                  <label className='flex justify-center items-center col-start-2 col-span-1 row-start-4 row-span-1'>
                    Did you have a referral?
                    <input
                      className="mx-4 w-4 h-4 bg-cream border-dusk rounded"
                      type="checkbox"
                      checked={referral}
                      onChange={handleReferralChange}
                    />
                  </label>

                  <label className='flex justify-evenly items-center col-span-2 row-start-5 row-span-1'>
                    Notes
                    <textarea
                      className='content-center mx-2 my-2 w-2/3 p-0.5'
                      name='notes'
                      id='notes'
                      rows="1" // start with one row
                      style={{ resize: 'vertical', minHeight: '50px' }} // set the minimum height and allow vertical resizing
                    />
                  </label>

                  <button className='col-span-2 row-start-6 row-span-1 text-white bg-gradient-to-r from-dusk via-twilight to-slate-700 hover:bg-gradient-to-br shadow-md shadow-twilight font-mono rounded-lg text-sm px-5 py-2.5 text-center mx-auto'>Add New Application</button>


              </form>

            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}