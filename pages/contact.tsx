import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Head from "next/head";
import React from "react";

interface Props {}

const contact = (props: Props) => {
  return (
    <>
      <Head>
        <title>Backstage Features | Contact</title>
        {/* favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      <section className="flex w-full">
        <div className="bg-[url('/images/illustration.svg')] bg-cover w-1/4 lg:w-2/5 h-screen z-20 hidden lg:block">
          <h1 className="text-4xl xl:text-6xl font-bold text-white p-6 mt-12">
            Backstage Features
          </h1>
        </div>
        <div className="w-full h-screen grid place-items-center">
          <form
            className="w-full px-4 md:w-1/2 md:px-0 flex flex-col gap-4"
            action="https://formspree.io/f/xwkypjdg"
            method="POST"
          >
            <div className="flex flex-col gap-2">
              <div className="w-full">
                <Socials />
              </div>
              <h2 className="text-4xl font-bold">Contact Backstage Features</h2>
              <p className="text-gray-700 text-lg">
                Let me know anything! Inquiries? leave them here! Questions?
                Leave them here!
              </p>
            </div>
            <fieldset className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="bg-gray-100 w-full p-4 rounded"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                className="bg-gray-100 w-full p-4 rounded"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                rows={5}
                className="bg-gray-100 w-full p-4 rounded"
              />
            </fieldset>
            <button className="w-full p-4 bg-[#7000ff] text-white font-bold rounded">
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default contact;
