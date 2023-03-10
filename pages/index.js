import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {

  const { data: session, status } = useSession()
  console.log(session)

  if (status === 'authenticated') {
    return (
      <>
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

  return (
    <>
      <button
        type="button"
        onClick={() => signIn("google")}
      >
        Sign in with google
      </button>
    </>
  )
}