import { signIn } from "next-auth/react"


export default function Login() {
  return (
    <>
      <h3>You must be logged in to access this page.</h3>
      <button
        type="button"
        onClick={() => signIn("google")}
      >
        Sign in with google
      </button>
    </>
  )
}