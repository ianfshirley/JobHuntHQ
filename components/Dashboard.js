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
    <div className=" flex flex-col text-center  content-center bg-gradient-to-tl from-juniper via-mauve to-juniper min-h-screen">
      <Header />
        <div className="grid grid-cols-5 grid-rows-1  w-full">
          <h1 className="self-center justify-self-center text-3xl text-cyan-900 col-start-2 col-span-3">Dashboard Page</h1>
          <button
            className='justify-self-end text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-base px-5 py-2.5 text-center mr-8 mb-2 m-4 w-32'
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

