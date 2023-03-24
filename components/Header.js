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
        <div className='flex justify-evenly items-center text-cream'>
          <h3 className="px-5">You are logged in as {session.user.name}</h3>
          <button
            className="text-white bg-gradient-to-br from-slate-800 to-slate-700 hover:bg-gradient-to-bl border border-solid border-cornflower font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 w-32"
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