import { NextPage } from "next";
import React from "react";
import Button from "./Button";
import NewsletterForm from "./NewsletterForm";

interface Props {}

const Hero: NextPage = (props: Props) => {
  return (
    <section className="p-5 lg:pt-24 lg:px-32 bg-gray-100 flex flex-col gap-6 bg-[url('/images/Gradient.png')] bg-contain bg-right-bottom bg-no-repeat relative">
      <div className="absolute inset-0 bg-[url('/images/Texture.png')] mix-blend-overlay pointer-events-none"></div>
      <div className="relative md:mb-10">
        <h1 className="text-[4em] lg:text-[6em] leading-none font-bold z-10">
          Backstage Features
        </h1>
        <h2 className="uppercase text-gray-400 md:text-xl lg:text-2xl">
          by Gracie Lowes
        </h2>
      </div>
      <div className="flex flex-col gap-4 z-1- pb-20">
        <p className="text-base md:text-lg lg:text-2xl md:w-3/4 lg:w-1/2 text-gray-600">
          Interviews, coverages, people, get backstage info about your favorite
          celeb from Backstage Features & Gracie Lowes
        </p>
        <div className="flex gap-2 z-10">
          <Button primary href="/posts">
            Posts
          </Button>
          <Button secondary href="/contact">
            Contact
          </Button>
        </div>
      </div>
      {/* <div className="z-10 mb-44 w-full md:w-3/4 py-10 flex justify-center">
        <NewsletterForm />
      </div> */}
    </section>
  );
};

export default Hero;
