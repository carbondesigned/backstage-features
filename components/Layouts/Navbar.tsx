import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <nav className='fixed w-full top-0 left-[50%] z-[1000] -translate-x-[50%] p-6 lg:px-32 flex items-start'>
        <div className='drawer z-50'>
          <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col'>
            <div className='w-full z-50 navbar flex-row-reverse'>
              <div className='flex-none lg:hidden'>
                <label
                  htmlFor='my-drawer-3'
                  className='btn btn-square btn-ghost'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-6 h-6 stroke-current'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                  </svg>
                </label>
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
                    <li className='border-2 border-opacity-0 border-base-300 hover:border-base-100 duration-200 rounded-xl hover:border-opacity-30'>
                      <Link href=''>
                        <a>Posts</a>
                      </Link>
                    </li>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='drawer-side'>
            <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
            <ul className='menu p-4 z-50 overflow-y-auto w-80 bg-base-200 text-base-100 rounded-xl'>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
