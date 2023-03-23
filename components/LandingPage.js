import { useSession, signIn } from "next-auth/react"
import Footer from "./Footer"
import Image from "next/image"
import JobHuntHQ from 'public/JobHuntHQ.png'
import placeholder1 from 'public/placeholder1.png'
import placeholder2 from 'public/placeholder2.png'


export default function LandingPage() {

  const { data: session } = useSession()

  return (
    <div className="bg-[url('/jhq-background.jpg')] bg-cover min-h-screen flex flex-col justify-between">

      <header>
        <Image
          className="pl-6"
          src={JobHuntHQ}
          alt='JobHuntHQ Logo'
        />
      </header>

      <div className="flex flex-col justify-between">

        <div className="flex flex-col justify-evenly text-center">
          <h1
            className="text-6xl text-white"
          >Say goodbye to job search chaos.</h1>
          <p>JobHuntHQ is a user-friendly job search tool that helps you stay organized and on top of your job search process</p>
          <button
            type="button"
            onClick={() => signIn("google")}
            className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-mono rounded-lg text-md px-5 py-2.5 text-center mx-auto'
          >
            Sign in to Get Started
          </button>
        </div>

        <div className="flex justify-between mt-48 mb-12 mx-24">
          <p className="w-2/5">
            Add job applications to your list to easily keep track of all the jobs you've applied for.
          </p>
          <Image
            className="w-1/2"
            src={placeholder1}
            alt='placeholder image 1'
          />
        </div>

        <div className="flex justify-between mx-24 my-12">
          <Image
            className="w-1/2"
            src={placeholder2}
            alt='placeholder image 2'
          />
          <p className="w-2/5">
            View your job list and update the status as you move through the hiring process.
          </p>
        </div>

      </div>

      <div>
        <p className="m-auto w-full flex justify-end">
          <a href="https://www.vecteezy.com/free-vector/background">Background Vectors by Vecteezy</a>
        </p>
        <Footer />
      </div>

    </div>
  )
}