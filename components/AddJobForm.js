import useResource from "@/hooks/useResource"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { useSession } from "next-auth/react";

export default function AddJobForm() {

  const { resources, createResource } = useResource();
  const [startDate, setStartDate] = useState(new Date());
  const { data: session } = useSession()
  const [selectedValue, setSelectedValue] = useState('choose');

  function handleCreateJob(e) {

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
    createResource(info);
    console.log(info)

  }

  return (
    <>
      <form
        onSubmit={handleCreateJob}
        className="flex w-6/12 p-6 mx-auto my-16 bg-blue-800/50 border border-blue-900 h-3/4 place-contents-center"
      >
        <fieldset className='w-11/12 place-contents-center'>

          <h3 className='text-white p-1'>Job Title</h3>
          <input type='text' name='title' id='title' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='ex: Software Developer' />

          <h3 className='text-white p-1'>Company</h3>
          <input type='text' name='company' id='company' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='ex: Code Fellows' />

          <h3 className='text-white p-1'>Date Applied</h3>
          <DatePicker name='date_applied' id='date_applied' showIcon selected={startDate} onChange={(date) => setStartDate(date)} className="pl-2" />

          <h3 className='text-white p-1'>How did you apply?</h3>
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            name='method'
            id='method'
            className='content-center mx-2 my-2 w-6/12 p-0.5'>
            <option value='choose' disabled>Choose One</option>
            <option value="linkedin">LinkedIn</option>
            <option value="indeed">Indeed</option>
            <option value="company_website">Company Website</option>
            <option value="other">Other</option>
          </select>

          <h3 className='text-white p-1'>Did you write a cover letter?</h3>
          <input type='text' name='cover_letter' id='cover_letter' className='content-center mx-2 my-2 w-6/12 p-0.5' />

          <h3 className='text-white'>Did you hav a referral? If so, who were they?</h3>
          <input type='text' name='referral' id='referral' className='content-center mx-2 my-2 w-6/12 p-0.5' placeholder='ex: Johnny at Facebook' />

          <h3 className='text-white p-1'>Notes</h3>
          <input type='text' name='notes' id='notes' className='content-center mx-2 my-2 w-6/12 p-0.5' />          

          <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'>Add New Application</button>

        </fieldset>
      </form>
    </>
  )
}