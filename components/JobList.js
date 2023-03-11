import useResource from '../hooks/useResource';
import UpdateJobModal from "./UpdateJobModal"
import React, { useState } from 'react';


export default function JobList() {

  const { resources } = useResource();

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const toggleUpdateModal = () => setIsUpdateModalOpen(!isUpdateModalOpen);

  return (
    <div className='bg-blue-300'>
      <h3 className='text-2xl pb-2'>Job List</h3>
      {resources && resources.map((job) => {
        return (
          <div key={job.id} job={job}>
            <p>{job.title}</p>
            <p>{job.company}</p>
            <button
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mb-2 w-32"
              onClick={toggleUpdateModal}
            >
              Update Job
            </button>
          </div>
        )
      })}
      <UpdateJobModal
        isModalOpen={isUpdateModalOpen}
        toggleModal={toggleUpdateModal}
      />
    </div>
  )
}