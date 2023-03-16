import { useSession, signOut } from "next-auth/react";
import JobList from "./JobList";
import AddJobModal from "./AddJobModal";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from 'react';


export default function Dashboard() {

  const { data: session } = useSession();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);

  function openAddModal() {
    toggleAddModal();
  }

  return (
    <div className=" flex flex-col text-center justify-between content-center bg-gray-200 min-h-screen">
      <Header />
        <div className="flex flex-row text-center">
          <h1 className="bg-rose-200 text-3xl text-cyan-900">Dashboard Page</h1>
          <button
            className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'
            onClick={() => openAddModal()}
          >
              Add a Job
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