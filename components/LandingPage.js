import { useSession, signIn, signOut } from "next-auth/react"


export default function LandingPage() {

  const { data: session } = useSession()

  return (
    <>
      <header className="bg-rose-200 text-3xl text-cyan-900">
        <h1>JobHuntHQ</h1>
        <h3>Making it Easier to Keep Track of Your Job Hunt!</h3>
      </header>
      <button
        type="button"
        onClick={() => signIn("google")}
        className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4'
      >
        Sign in with google
      </button>
    </>
  )
}