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
    <div className=" flex flex-col text-center justify-between content-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]  from-frost via-[#F3FCFF] to-frost min-h-screen">
      <Header />
        <div className="grid grid-cols-5 grid-rows-1  w-full">
          <h1 className="self-center justify-self-center text-3xl text-slate-900 col-start-2 col-span-3">Dashboard Page</h1>
          <button
            className='flex justify-center items-center justify-self-end text-slate-900 bg-gradient-to-r from-frost via-frost-green  to-juniper hover:bg-gradient-to-br font-mono rounded-lg text-base px-5 py-2.5 text-center mr-8 mb-2 m-4'
            onClick={() => openAddModal()}
          >
            <p className="pr-2">Add a Job</p>
            <FiPlusCircle style={{ fontSize: '1.5rem' }} className='text-white'/>
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


