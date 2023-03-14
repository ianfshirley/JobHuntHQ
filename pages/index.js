import { useSession, signIn, signOut } from "next-auth/react"
import Dashboard from "@/components/Dashboard"
import LandingPage from "@/components/LandingPage"


export default function Home() {

  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <>
        <Dashboard />
      </>
    )
  }

  return (
    <>
      <LandingPage />
    </>
  )
}