import Link from "next/link"
import React from "react"

type Props = {
  btnText?: string
  btnLink?: string
  title: string
  subtitle: string
  children: React.ReactNode
}
const Section = ({ title, subtitle, children, btnText, btnLink }: Props) => {
  return (
    <section className='mt-20 text-base-100'>
      <h2 className='text-4xl lg:text-5xl font-bold'>{title}</h2>
      <p className='text-neutral-content my-4 lg:text-lg max-w-[60ch]'>
        {subtitle}
      </p>
      {btnText && btnLink && (
        <Link href={btnLink}>
          <a className='btn btn-primary text-base-100 mb-12'>{btnText}</a>
        </Link>
      )}
      {children}
    </section>
  )
}

export default Section
