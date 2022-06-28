import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed w-full top-0 left-[50%] z-50 -translate-x-[50%] p-6 lg:px-32 flex items-start'>
      <div className='w-full navbar flex-row-reverse'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='flex-none bg-base-200 p-6 rounded-xl z-50 cursor-pointer lg:hidden'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-base-100'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </div>
        <div className='flex items-center w-full gap-12 text-base-100'>
          <div className='p-6 grid place-items-center backdrop-blur-lg bg-base-300/50 flex-[0.25] max-w-fit h-fit rounded-full'>
            <Image
              src='/images/logo.svg'
              layout='fixed'
              width={50}
              height={50}
            />
          </div>
          <div className='flex-none hidden lg:bg-base-300 lg:backdrop-blur-lg lg:bg-base-300/50 lg:flex-1 text-right lg:w-full p-6 rounded-xl lg:block'>
            <ul className='menu menu-horizontal'>
              <Links />
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='fixed inset-0 flex justify-center p-12 min-h-screen bg-neutral/75 backdrop-blur-lg lg:hidden'>
          <ul className='menu items-center gap-6 justify-center h-fit p-4 z-40 overflow-y-auto w-3/4 bg-base-300 text-base-100 rounded-xl'>
            <li className='bg-base-200 duration-200 rounded-xl flex items-center w-full'>
              <Link href=''>
                <a className='w-fit'>Gallery</a>
              </Link>
            </li>
            <li className='bg-base-200 duration-200 rounded-xl flex items-center w-full'>
              <Link href=''>
                <a>Videos</a>
              </Link>
            </li>
            <li className='bg-base-200 duration-200 rounded-xl flex items-center w-full'>
              <Link href=''>
                <a>About</a>
              </Link>
            </li>
            <li className='px-6 btn text-base-100 w-full items-center btn-primary rounded-xl'>
              <Link href=''>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

export const Links = () => {
  return (
    <>
      <li className='border-2 border-opacity-0 border-base-300 hover:border-base-100 duration-200 rounded-xl hover:border-opacity-30'>
        <Link href=''>
          <a>Gallery</a>
        </Link>
      </li>
      <li className='border-2 border-opacity-0 border-base-300 hover:border-base-100 duration-200 rounded-xl hover:border-opacity-30'>
        <Link href=''>
          <a>Videos</a>
        </Link>
      </li>
      <li className='border-2 border-opacity-0 border-base-300 hover:border-base-100 duration-200 rounded-xl hover:border-opacity-30'>
        <Link href=''>
          <a>About</a>
        </Link>
      </li>
      <li className='px-6 btn text-base-100 btn-primary rounded-xl ml-6'>
        <Link href=''>
          <a>Contact</a>
        </Link>
      </li>
    </>
  )
}
