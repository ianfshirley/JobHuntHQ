import JobList from "./JobList";
import AddJobModal from "./AddJobModal";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';


export default function Dashboard() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);

  function openAddModal() {
    toggleAddModal();
  }

  return (
    <div className=" flex flex-col text-center justify-between content-center bg-twilight min-h-screen">
      <Header />
        <div className="grid grid-cols-5 grid-rows-1  w-full">
          <h1 className="self-center justify-self-center text-6xl text-cream font-montserrat col-start-2 col-span-3">DASHBOARD</h1>
          <button
            className='flex justify-center items-center justify-self-end text-white bg-gradient-to-r from-mauve  to-light-mauve hover:bg-gradient-to-br border border-solid border-cornflower font-mono rounded-lg text-base px-5 py-2.5 text-center mr-8 mb-2 m-4'
            onClick={() => openAddModal()}
          >
            <p className="pr-2">Add a Job</p>
            <FiPlusCircle style={{ fontSize: '1.5rem' }} className='text-cornflower'/>
          </button>
        </div>
      
      <div className="flex justify-evenly">
        <AddJobModal
          isModalOpen={isAddModalOpen}
          toggleModal={toggleAddModal}
        />
        <JobList />
      </div>
      <Footer />
    </div>
  )
}


