import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';

export default function LandingPage() {

  const { data: session, status } = useSession()
  const router = useRouter();

  // function handleLogin() {
  //   signIn("google");
  //   router.push('/dash')
  // }

  if (status === 'authenticated') {
    return (
      <>
        <div>
          <h3>You are logged in as {session.user.name}</h3>
          <button
            type="button"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => signIn("google")}
        >
          Sign in with google
        </button>
      </div>
    </>
  )
}