import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className='bg-base-300 mt-32 z-50 left text-white p-12 md:px-20 lg:px-32 rounded-xl flex flex-col-reverse lg:flex-row items-center'>
      <div className='flex flex-1 flex-col gap-4'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-bold lg:max-w-[10ch]'>
          Backstage Features
        </h1>
        <div className='flex flex-col gap-2'>
          <p className='text-neutral-content text-sm md:text-base lg:text-lg xl:text-xl md:max-w-[60ch]'>
            Interviews, coverages, people, get backstage info about your
            favorite celeb from Backstage Features & Gracie Lowes
          </p>
          <div className='flex gap-4 justify-center lg:justify-start'>
            {/* TODO: change link when avail */}
            <Link href='/'>
              <a className='btn btn-primary'>Contact</a>
            </Link>
            <Link href='/'>
              <a className='btn btn-outline text-white'>Read More</a>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-1 z-0 relative flex justify-center'>
        <Image
          src='/images/hero-img.svg'
          alt='Backstage Features by Gracie Lowes'
          layout='intrinsic'
          width={600}
          height={600}
        />
      </div>
    </section>
  )
}
