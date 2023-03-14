import Image from "next/image"
import JHQ from 'public/JHQ.png'


export default function Header() {
  return (
    <>
      <header>
        <Image
          src={JHQ}
          alt='JHQ Logo'
        />
      </header>
    </>
  )
}