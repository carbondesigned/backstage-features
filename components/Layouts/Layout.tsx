import Navbar from "./Navbar"

type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-neutral p-6 md:px-4 lg:px-24 xl:px-48 2xl:px-72 3xl:px-96 4xl:px-[28rem] 5xl:px-[34rem] 6xl:px-[48rem] 7xl:px-[60rem] 8xl:px-[75rem] 9xl:px-[90rem] 10xl:px-[120rem] '>
        {children}
      </main>
    </>
  )
}

export default Layout
