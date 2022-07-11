import React from "react";

type Props = {
  name: string;
  onSubmit?: () => void;
};

const AlbumSlot = ({ name, onSubmit, ...props }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="h-52 relative cursor-pointer bg-base-200 rounded-xl grid place-items-center">
      <input
        id="image"
        tabIndex={0}
        ref={inputRef}
        onChange={onSubmit}
        {...props}
        name={name}
        type="file"
        className="opacity-0 z-10 absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-neutral-content"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default AlbumSlot;
