import useResource from "../Hooks/useResource.js";
import { useSession } from "next-auth/react";
import Header from "./Header.js";
import AddJobForm from "./AddJobForm.js";
import JobList from "./JobList.js";
import Footer from "./Footer.js";


export default function Dashboard() {
  
  const { createResource, updateResource, deleteResource, resources } =
    useResource();
  const { data: session } = useSession();
  console.log(session)


  return (
    <>
      <Header />
      <main>
        <h3>You are logged in as {session.user.name}</h3>
        <AddJobForm />
        <JobList />
      </main>
      <Footer />
    </>
  )
}