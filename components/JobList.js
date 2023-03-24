import useResource from '../hooks/useResource';
import UpdateJobModal from "./UpdateJobModal";
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';


export default function JobList() {

  // AccordionItem state:
  const [open, setOpen] = useState(false);

  const toggleAccordionItem = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  const { resources } = useResource();

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const toggleUpdateModal = () => setIsUpdateModalOpen(!isUpdateModalOpen);
  const [selectedJob, setSelectedJob] = useState(null);

  function openUpdateModal(job) {
    toggleUpdateModal(job)
    setSelectedJob(job)
    console.log(job.id)
  }

  return (
    <div className='overflow-auto rounded-lg m-8 bg-beige'>
      <h3 className='text-3xl font-semibold text-cream pt-4 pb-2'>Job List</h3>
      <div className='grid grid-cols-1 divide-y-2 divide-dusk m-4 rounded-lg bg-cream'>
        {resources && resources.map((job, index) => {
          return (
            <AccordionItem
              key={index}
              open={index === open}
              title={job.title}
              company={job.company}
              date_applied={job.date_applied}
              method={job.method_label}
              cover_letter={job.cover_letter}
              referral={job.referral}
              notes={job.notes}
              first={job.first}
              second={job.second}
              third={job.third}
              rejected={job.rejected}
              offer={job.offer}
              job={job}
              openUpdateModal={openUpdateModal}
              toggleAccordionItem={() => toggleAccordionItem(index)}
            />
          )
        })}
      </div>

      {selectedJob && (
        <UpdateJobModal
          isModalOpen={isUpdateModalOpen}
          toggleModal={toggleUpdateModal}
          job={selectedJob}
        />
      )}
    </div>
  )
}