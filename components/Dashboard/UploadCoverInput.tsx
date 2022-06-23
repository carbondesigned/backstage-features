import React from 'react';

type Props = {
  error: string | undefined;
  name: string;
  label: string;
};

const UploadCoverInput = ({ error, name, label, ...props }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [hasFiles, setHasFiles] = React.useState(false);

  React.useEffect(() => {
    const isImagePresent =
      inputRef.current?.files && inputRef.current?.files?.length > 0;

    if (isImagePresent) {
      setHasFiles(true);
    }
  }, [inputRef.current?.files, hasFiles]);
  return (
    <div className='flex flex-col gap-2'>
      {error && <div>{error}</div>}
      <label htmlFor='cover' className='text-xl text-neutral-content'>
        {label}
      </label>
      <div
        tabIndex={0}
        className='relative bg-base-200 rounded-xl w-full flex justify-center items-center py-12 gap-4'
      >
        {hasFiles && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-12 w-12 fill-primary animate-indicator-bounce'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
        )}
        <div className='btn btn-primary border-0 px-12 font-bold text-lg pointer-events-none'>
          {hasFiles ? 'Change' : 'Upload'}
        </div>
        <input
          tabIndex={0}
          ref={inputRef}
          {...props}
          name={name}
          type='file'
          className='opacity-0 z-10 absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
      </div>
    </div>
  );
};

export default UploadCoverInput;
