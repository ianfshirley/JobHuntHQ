import { useSession, signOut } from "next-auth/react"


export default function Dashboard() {

  const { data: session } = useSession()

  return (
    <>
      <h1>Dashboard Page</h1>
      <h3>You are logged in as {session.user.name}</h3>
      <button
        type="button"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </>
  )
}