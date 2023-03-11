import Modal from "react-modal";


export default function UpdateJobModal(props) {


  return (
    <>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.toggleModal}
        contentLabel="Example Modal"
        overlayClassName="overlay"
        appElement={document.getElementById('root') || undefined}
        className=""
      >
        <h1 className="text-3xl">Update Job Form Coming Soon!</h1>
        <button
          className="absolute px-2 text-lg font-bold text-center transition-all duration-300 border border-white rounded-md top-4 right-4 hover:text-red-500 hover:border-red-500 text-violet-700"
          onClick={props.toggleModal}
        >
          X
        </button>
      </Modal>
    </>
  )
}