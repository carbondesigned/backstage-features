import React from "react";
import Button from "./Button";

interface Props {}

const NewsletterForm = (props: Props) => {
  return (
    <form className="w-full">
      <label
        htmlFor="email"
        className="text-gray-600 md:text-xl text-center md:text-left"
      >
        Get Notifications on new and popular content & Join our Newsletter!
      </label>
      <div className="flex flex-col md:flex-row gap-2">
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full p-4 bg-white rounded"
        />
        <Button primary type="submit">
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default NewsletterForm;
