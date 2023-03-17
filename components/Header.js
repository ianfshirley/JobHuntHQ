import Image from "next/image"
import JHQ from 'public/JHQ.png'
import JobHuntHQ from 'public/JobHuntHQ.png'
import { useSession, signOut } from "next-auth/react"


export default function Header() {

  const { data: session } = useSession()

  return (
    <>
      <header className="flex justify-between">
        <Image
          className="pl-6"
          src={JobHuntHQ}
          alt='JobHuntHQ Logo'
        />
        <div className='flex justify-evenly items-center'>
          <h3 className="px-5">You are logged in as {session.user.name}</h3>
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 w-32"
            type="button"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </header>
    </>
  )
}