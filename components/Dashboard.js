import { useSession, signOut } from "next-auth/react"
import JobList from "./JobList"
import AddJobForm from "./AddJobForm"
import Header from "./Header"


export default function Dashboard() {

  const { data: session } = useSession()

  return (
    <div className=" flex flex-col justify-around text-center content-center bg-gray-200 min-h-screen">
      <Header />
      <h1 className="bg-rose-200 text-3xl text-cyan-900">Dashboard Page</h1>
      <div className='bg-green-300'>
        <h3>You are logged in as {session.user.name}</h3>
        <button
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mb-2 w-32"
          type="button"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <AddJobForm />
      <JobList />
    </div>
  )
}