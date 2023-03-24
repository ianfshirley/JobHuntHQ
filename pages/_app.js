import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
});


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <style jsx global>
        {`
          :root {
            --montserrat-font: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </SessionProvider>
  )
}