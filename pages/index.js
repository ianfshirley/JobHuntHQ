import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Google from 'next-auth/providers/google';

export default function Home({ providers }) {

  const { data: session, status } = useSession()


  useEffect(() => {
    if (status === 'authenticated') {
      if (session.provider === "google") {
        var auth_token = session.auth_token
        backendapi(auth_token)
      }

    }

  }, [session])
  function backendapi(auth_token) {
    // var tag = document.getElementById("user_token").innerHTML = auth_token
    fetch(`http://127.0.0.1:8000/accounts/google/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "auth_token": auth_token }),
    }).then((data) => data.json())
      .then((res) => {
        if (res.tokens) {
          console.log(res)
          document.getElementById("email_id").innerText = res.email
          document.getElementById("token").innerText = res.tokens
        }
      })
  }
  return (
    <>

      <div id='google-login-btn'>

        <button
          type="button"
          onClick={() => signIn("google")}
        >
          Sign in with google
        </button>

        <button
          type="button"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        
        <h6 id='user_token'></h6>
        <div>
          <label>Email Id :</label>
          <label id='email_id'></label>
        </div>
        <div >
          <label>Auth token :</label>
          <label id='token'></label>
        </div>
      </div>
    </>
  )
}