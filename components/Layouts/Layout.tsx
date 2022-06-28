import Navbar from "./Navbar"

type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-neutral p-6 lg:p-32'>{children}</main>
    </>
  )
}

export default Layout
