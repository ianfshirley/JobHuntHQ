import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Google from 'next-auth/providers/google';

export default function Home() {

  const { data: session, status } = useSession()

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