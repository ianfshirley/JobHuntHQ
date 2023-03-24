import { GoX, GoChevronDown } from 'react-icons/go';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Collapse } from 'react-collapse';
import useResource from '@/hooks/useResource';


export default function AccordionItem({ open, toggleAccordionItem, title, company, date_applied, method, cover_letter, referral, notes, first, second, third, rejected, offer, job, openUpdateModal, toggleModal }) {

  const { deleteResource } = useResource();

  function handleDeleteJob() {
    const confirmed = window.confirm(`Are you sure you want to delete ${title} at ${company}?`)

    if (confirmed) {
      deleteResource(job.id);
      console.log('Job deleted');
    } else {
      console.log('Job not deleted');
    }
  }

  return (
    <div className="">
      <div
        className=" py-4 px-10 flex justify-between items-center  cursor-pointer"
        onClick={toggleAccordionItem}
      >
        <p className="text-2xl font-semibold text-twilight">{title} at {company}</p>
        <div className="text-3xl">
          {open ? <GoX className='text-cornflower' /> : <GoChevronDown className='text-cornflower' />}
        </div>
      </div>

      <Collapse isOpened={open}>

        <div>

          <div className='grid grid-cols-9 grid-rows-3 gap-4 items-center mt-4 text-twilight font-semibold'>
            <p className='col-start-1 col-end-5 row-span-1'>
              Date Applied: {date_applied}
            </p>
            <p className='col-start-5 col-end-9 row-span-1'>
              Method of Application: {method}
            </p>
            <p className='col-start-1 col-end-5 row-start-2 row-span-1'>
              Did you write a cover letter? {cover_letter}
            </p>
            <p className='col-start-5 col-end-9 row-start-2 row-span-1'>
              Did you have a referral? {referral}
            </p>
            <p className='col-start-1 col-span-9'>
              Notes: {notes}
            </p>

            <div className='col-start-9 col-span-1 row-start-1 row-span-1 flex justify-center items-center pr-6'>
              <FaEdit
                className='text-cornflower text-2xl'
                onClick={() => openUpdateModal(job)}
              />
            </div>
            <div className='col-start-9 col-span-1 row-start-2 row-span-1 flex justify-center items-center pr-7'>
              <FaTrashAlt
                className='text-cornflower text-2xl'
                onClick={() => handleDeleteJob()}
              />
            </div>
          
            {/* <button
            className="text-white bg-gradient-to-br from-cornflower to-cyan-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mb-2 w-32"
            onClick={() => openUpdateModal(job)}
          >
            Update
          </button> */}
            {/* <button
            className="text-white bg-gradient-to-br from-cornflower to-cyan-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 w-32"
            onClick={() => handleDeleteJob()}
          >
            Delete
          </button> */}
          </div>

          <div className="flex justify-center text-center w-auto">
            {
              first
                ?
                <div className="flex justify-center px-10 h-auto mb-2 py-4">
                  <p>
                    First Interview:
                  </p>
                  <p className='text-cornflower font-extrabold pl-2'>
                    &#x2713;
                  </p>
                </div>
                :
                ''
            }
            {
              second
                ?
                <div className="flex justify-center px-10 h-auto mb-2 py-4">
                  <p>
                    Second Interview:
                  </p>
                  <p className='text-cornflower font-extrabold pl-2'>
                    &#x2713;
                  </p>
                </div>
                :
                ''
            }
            {
              third
                ?
                <div className="flex justify-center px-10 h-auto mb-2 py-4">
                  <p>
                    Third Interview:
                  </p>
                  <p className='text-cornflower font-extrabold pl-2'>
                    &#x2713;
                  </p>
                </div>
                :
                ''
            }
            {
              rejected
                ?
                <div className="flex justify-center px-10 h-auto mb-2 py-4">
                  Rejected: &#128546;
                </div>
                :
                ''
            }
            {
              offer
                ?
                <div className="flex justify-center px-10 h-auto mb-2 py-4">
                  Offer Received! &#129321;
                </div>
                :
                ''
            }
          </div>

        </div>


      </Collapse>
    </div>
  )
}