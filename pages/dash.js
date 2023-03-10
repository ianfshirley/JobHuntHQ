import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import Login from "@/components/Login"
import Dashboard from "@/components/Dashboard"


export default function Dash() {

  const { data: session, status } = useSession()
  const router = useRouter()

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