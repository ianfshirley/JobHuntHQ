import { useSession } from "next-auth/react"
import Login from "@/components/Login"
import Dashboard from "@/components/Dashboard"


export default function Dash() {

  const { data: session, status } = useSession()
  console.log(session)

  if (status === 'authenticated') {
    return (
      <>
        <Dashboard />
      </>
    )
  }

  return (
    <>
      <Login />
    </>
  )
}