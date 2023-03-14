import { useSession, signOut } from "next-auth/react"
import JobList from "./JobList"
import AddJobForm from "./AddJobForm"
import Header from "./Header"
import Footer from "./Footer"


export default function Dashboard() {

  const { data: session } = useSession()

  return (
    <div className=" flex flex-col text-center justify-between content-center bg-gray-200 min-h-screen">
      <Header />
      <h1 className="bg-rose-200 text-3xl text-cyan-900">Dashboard Page</h1>
      <div className="flex justify-evenly">
        <AddJobForm />
        <JobList />
      </div>
      <Footer />
    </div>
  )
}